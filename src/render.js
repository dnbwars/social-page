import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, addMessage, updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";


export let rerenderEntireTree = (state) => {

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App onstate={state} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText} /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
}