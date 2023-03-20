import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { Titlebar } from "./components/titlebar";
import { ErrorBoundary } from './libs/ErrorBoundary'
import { ErrorScreen } from "./components/errorScreen";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Titlebar />
    <ErrorBoundary fallback={<ErrorScreen />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
