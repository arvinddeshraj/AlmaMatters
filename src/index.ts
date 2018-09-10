import App from './App';
import urls from './urls';

const app = new App();

app.route(urls)
   .serve();
