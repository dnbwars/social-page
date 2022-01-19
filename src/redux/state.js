let rerenderEntireTree = () => {
    console.log('state changed ')
}

let state = {

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
    
};

// let newPostText = () => {
    
// };

// state.profilePage.posts.push(updatePost);


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = (postMessage) => {
    let newMessage = {
        id: 5,
        note: postMessage
    };
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;