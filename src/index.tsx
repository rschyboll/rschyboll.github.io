import ReactDOMClient from 'react-dom/client';

import { App } from './app';
import './i18n';
import './scss/index.scss';

const app = document.getElementById('app');
const root = ReactDOMClient.createRoot(app as HTMLElement);

root.render(<App />);
