import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Map from "./components/MyMap/Map";

const App = (props) => {

  return (
    <div className="wrap">
      <Header/>
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={ () => <DialogsContainer />}/>

        <Route
          path="/profile"
          render={ () => <Profile />}/>

        <Route path="/news" component={News}/>
        
        <Route path="/music" 
          render={ () => <Music /> }/>
  
        <Route path="/map" component={Map} />
        <Route path="/settings" component={Settings} />
        <Route path="/friends" component={Friends}/>
      </div>
    </div>
  );
  debugger
};

//получаем из state.js через index.js массив через пропсы и передаем дальше в profile dialogs и navbar через пропсы
//в момент отрисовки profile и dialogs, navbar надо передать дальше пропсы массива из index.js
export default App;
