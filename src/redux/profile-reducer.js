const  ADD_POST = 'ADD-POST';
const  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Hi. How are you?", likeCount: 12 },
        { id: 2, message: "I`m fine", likeCount: 11 },
        { id: 3, message: "I`m fine", likeCount: 11, type:"reposted" },
      ],
      newPostText: "text default"
};

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0,
              };
              let stateCopy = {...state};
              stateCopy.posts = [...state.posts];
              stateCopy.posts.push(newPost);
              stateCopy.newPostText = " ";
              return stateCopy;
            }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;

//убираем this._state потому что в const profileReducer = () уже приходит state, action
// state, action приходят именно для profilePage