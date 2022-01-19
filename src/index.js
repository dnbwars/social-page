import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, { addPost, addMessage, updateNewPostText, subscribe } from "./redux/state";
import { BrowserRouter } from "react-router-dom";


let rerenderEntireTree = (state) => {

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App onstate={state} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText} /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//Передаем массив данных пропсами в app из state