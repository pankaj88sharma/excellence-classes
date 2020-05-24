import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-image-gallery/styles/css/image-gallery.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();