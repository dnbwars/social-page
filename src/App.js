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

const App = () => {
  let posts = [
    { id: 1, message: "Hi. How are you?", likeCount: 12 },
    { id: 2, message: "I`m fine", likeCount: 11 },
  ];

  let dialogs = [
    { id: 1, name: "Jecka" },
    { id: 2, name: "Kristina" },
    { id: 3, name: "Erika" },
    { id: 4, name: "Alex" },
  ];

  let messages = [
    { id: 1, note: "Hi" },
    { id: 2, note: "How are you?" },
    { id: 3, note: "Cool" },
    { id: 4, note: "Never stop learning" },
  ];

  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <Dialogs dialogs={dialogs} messages={messages} /> } />
          <Route path="/profile" render={ () => <Profile posts={posts} />}  />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
