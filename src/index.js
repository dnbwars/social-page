import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state.js";
import addMessage from "./redux/state.js";
import addPost from "./redux/state.js";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state, addPost, addMessage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//Передаем массив данных пропсами в app из state