import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state.js";
import { addPost } from "./redux/state.js";
import { addMessage } from "./redux/state.js";
import { BrowserRouter } from "react-router-dom";


export let rerenderEntireTree = () => {

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App onstate={state} addPost={addPost} addMessage={addMessage} /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
}