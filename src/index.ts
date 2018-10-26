import { readFileSync } from 'fs';
import * as path from 'path';
import App from './App';
import routes from './routes';

// import knexConnection from './models/connection';

// knexConnection('numbers').where({ id: 1 }).select('*').then(_ => console.log(_))

const privateKey = readFileSync(path.join(__dirname, '../domain.key'));
const certificate = readFileSync(path.join(__dirname, '../domain.crt'));

const credentials = { key: privateKey, cert: certificate };

const app = new App(credentials);

export default app.route(routes)
                  .serve();