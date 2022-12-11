import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi. How are you?", likeCount: 12 },
        { id: 2, message: "I`m fine", likeCount: 11 },
        { id: 3, message: "I`m fine", likeCount: 11, type:"reposted" },
      ],
      newPostText: "text defaul111t1",
    },

    dialogsPage: {
      messages: [
        { id: 1, note: "Hi" },
        { id: 2, note: "How are you?" },
        { id: 3, note: "Cool" },
        { id: 4, note: "Never stop learning, you know" },
      ],
      dialogs: [
        { id: 1, name: "Jecka" },
        { id: 2, name: "Kristina" },
        { id: 3, name: "Erika" },
        { id: 4, name: "Alex" },
      ],
      newMessageText: "text",
    },

    sidebar: {
      friends: [
        { name: "Jecka", logo: <img src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"/>},
        { name: "Kris", logo: <img src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"/>,},
        { name: "Alex", logo: <img src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"/>,},
      ]
    },
    newsFilters: {
      filters: [{filter: 'car'}, {filter: "sport"}]
    }
  },

  getState() {
    return this._state;
  },

  rerenderEntireTree() {
    console.log("state changed ");
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._rerenderEntireTree(this._state);
  },
};

window.store = store;

export default store;

//"this._state.profilePage = profileReducer..." = вызываем profileReducer и передаем данные в profilePage и тд. для остальных