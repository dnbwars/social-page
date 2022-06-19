const  ADD_POST = 'ADD-POST';
const ADD_MESSAGE = "ADD-MESSAGE"
const  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const  UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi. How are you?", likeCount: 12 },
        { id: 2, message: "I`m fine", likeCount: 11 },
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
      friends: [{ name: "Jecka" }, { name: "Kris" }, { name: "Alex" }],

      logo: [
        {
          logo: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png",
        },
        {
          logo: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png",
        },
        {
          logo: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png",
        },
      ],
    },
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

    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);

    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);

    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 5,
        note: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._rerenderEntireTree(this._state);

    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._rerenderEntireTree(this._state);
    };
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newText: text })

window.store = store;

export default store;
