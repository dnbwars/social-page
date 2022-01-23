let store = {
    _state: {

        profilePage: {
    
            posts: [
                { id: 1, message: "Hi. How are you?", likeCount: 12 },
                { id: 2, message: "I`m fine", likeCount: 11 }],
            newPostText: 'text default'
        },
    
        dialogsPage: {
    
            messages: [
                { id: 1, note: "Hi" },
                { id: 2, note: "How are you?" },
                { id: 3, note: "Cool" },
                { id: 4, note: "Never stop learning, you know" }
              ],
    
              dialogs: [
                { id: 1, name: "Jecka" },
                { id: 2, name: "Kristina" },
                { id: 3, name: "Erika" },
                { id: 4, name: "Alex" }
            ] 
        },
    
        sidebar: {
            friends: [
                {name: "Jecka"},
                {name: "Kris"},
                {name: "Alex"}
            ],
    
            logo: [
                { logo: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png" },
                { logo: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png" },
                { logo: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png" }
            ]
        }
        
    },

    getState() {
        return this._state;
    },

    rerenderEntireTree() {
        console.log('state changed ')
    },


    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    addMessage(postMessage) {
        let newMessage = {
            id: 5,
            note: postMessage
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._rerenderEntireTree(this._state);
    },

    subscribe(observer){
        this._rerenderEntireTree = observer;
    }
}


window.store = store;

export default store;