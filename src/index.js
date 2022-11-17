import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";

// import reportWebVitals from "./reportWebVitals";

dayjs.extend(advancedFormat);

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
