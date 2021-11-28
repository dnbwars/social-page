import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  return (
    <div className="wrap">
      <Header />
      <Navbar state={props.onstate.sidebar} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.onstate.dialogsPage} />}
        />
        <Route
          path="/profile"
          render={() => <Profile state={props.onstate.profilePage} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/friends" component={Friends} />
      </div>
    </div>
  );
};

//получаем из state.js через index.js массив через пропсы и передаем дальше в profile dialogs и navbar через пропсы
//в момент отрисовки profile и dialogs, navbar надо передать дальше пропсы массива из index.js
export default App;
