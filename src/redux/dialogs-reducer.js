const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let  initialState = {
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
      newMessageText: "text"
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                note: state.newMessageText,
              };

              let stateCopy = {...state};
              stateCopy.messages = [...state.messages];
              stateCopy.dialogs = [...state.dialogs];
              stateCopy.messages.push(newMessage);
              stateCopy.newMessageText = " ";
              return stateCopy;
            }

        case UPDATE_MESSAGE_TEXT: {
              let stateCopy = {...state};

            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default: 
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newText: text })


export default dialogsReducer;

// убираем this._state потому что в const profileReducer = () уже приходит state, action
// state, action приходят именно для dialogsPage