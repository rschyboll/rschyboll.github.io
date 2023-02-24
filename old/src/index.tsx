import ReactDOMClient from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import { App } from './app';
import i18n from './i18n';
import './scss/index.scss';

const app = document.getElementById('app');
const root = ReactDOMClient.createRoot(app as HTMLElement);

root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
);
