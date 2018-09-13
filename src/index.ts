import { readFileSync } from 'fs';
import * as path from 'path';
import App from './App';
import routes from './routes';

const privateKey = readFileSync(path.join(__dirname, '../domain.key'));
const certificate = readFileSync(path.join(__dirname, '../domain.crt'));

const credentials = { key: privateKey, cert: certificate };

const app = new App(credentials);

app.route(routes)
   .serve();