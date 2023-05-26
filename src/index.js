import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
   font-family: "Lato", sans-serif;
}

      ::-webkit-scrollbar {
        width: 12px;
      }
      ::-webkit-scrollbar-track {
        background: #ececec;
        border-radius: 100vw;
        margin-block: 0.5em;
      }
      ::-webkit-scrollbar-thumb {
        background: #f39712;
        border-radius: 100vw;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #b47419;
      }
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
