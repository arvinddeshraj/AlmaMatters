import { createServer as httpsServer, ServerOptions, Server as sServer } from 'https';
import { createServer as httpServer, Server as Server } from 'http';
import { sign as signToken, verify as verifyToken } from 'jsonwebtoken';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as bodyParser from 'body-parser';

export default class App {
  private port: number = Number(process.env.PORT) || 3000;
  private sPort: number = Number(process.env.SPORT) || 3001;
  private app;
  public https: sServer;
  public http: Server;
  /**
   * App constructor
   * @param {string} name
   */
  constructor(credentials: ServerOptions, name: string = 'Alma Matters') {
    this.app = express();
    this.app.use(bodyParser.json({ parameterLimit: 1000000, limit: '50mb', extended: true }));
    this.app.use(bodyParser.urlencoded({ parameterLimit: 1000000, limit: '50mb', extended: true }));
    this.app.use(async (req, res, next) => {
      if(req.get('authorization')) {
        const token = req.get('authorization').split[0]; // Bearer <token>
        const decoded = verifyToken(token, 'secretkey');
        req.user = decoded;
      }
      next();
    });
    this.https = httpsServer(credentials, this.app);
    this.http = httpServer(this.app);
    this.app.set('name', name);
  }
  /**
   * Init http-listener
   * @returns {this}
   */
  public serve(): any {
    this.http.listen(this.port, _ => console.log(`@ http://localhost:${this.port}`));
    this.https.listen(this.sPort, _ => console.log(`@ https://localhost:${this.sPort}`));
    return this;
    // return this.app.listen(this.port, _ => console.log(`server started on http://127.0.0.1:${this.port}`));
  }
  public route(urls: Map<string, Function>): any {
    urls.forEach((cb, path) => this.app.use(path, cb));
    return this;
  }
}