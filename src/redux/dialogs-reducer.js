const ADD_MESSAGE = "ADD-MESSAGE"
const  UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                note: state.newMessageText,
              };
              state.messages.push(newMessage);
              state.newMessageText = "";
              return state;
        
        case UPDATE_MESSAGE_TEXT:
                state.newMessageText = action.newText;
            return state;

        default: 
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newText: text })


export default dialogsReducer;

// убираем this._state потому что в const profileReducer = () уже приходит state, action
// state, action приходят именно для dialogsPage