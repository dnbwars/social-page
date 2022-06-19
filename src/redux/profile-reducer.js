const  ADD_POST = 'ADD-POST';
const  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
              };
              state.posts.push(newPost);
              state.newPostText = "";

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
        
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;

//убираем this._state потому что в const profileReducer = () уже приходит state, action
// state, action приходят именно для profilePage