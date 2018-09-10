import * as express from 'express';

export default class App {
  private port: number = Number(process.env.PORT) || 3000;
  private app;
  /**
   * App constructor
   * @param {string} name
   */
  constructor(name: string = 'Alma Matters') {
    this.app = express();
    this.app.set('name', name);
  }
  /**
   * Init http-listener
   * @returns {"http".Server}
   */
  public serve(): any {
    return this.app.listen(this.port, _ => console.log(`server started on http://127.0.0.1:${this.port}`));
  }
  public route(urls: Map<string, Function>): any {
    urls.forEach((cb, path) => this.app.get(path, cb)); // TODO: make it work for other http verbs as well
    return this;
  }
}
