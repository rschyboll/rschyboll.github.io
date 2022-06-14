import { App } from "./app";
import ReactDOMClient from "react-dom/client";

import "./scss/index.scss";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app as HTMLElement);

root.render(<App />);
