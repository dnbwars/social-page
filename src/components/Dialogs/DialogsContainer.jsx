import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {

//   return (
//     <StoreContext.Consumer> 
//       { (store) => {

//         let state = store.getState();

//         let addNewMessage = () => {
//           store.dispatch( addMessageActionCreator() );
//         }
      
//         let onMessageChange = (text) => {
//           let action = updateMessageTextActionCreator(text);
//           store.dispatch(action);
//         }

//         return <Dialogs updateNewMessageText={onMessageChange} 
//               addMessage={addNewMessage} 
//               dialogs={state.dialogsPage.dialogs}
//               messages={state.dialogsPage.messages}/>
//             }
//       } 
//   </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      let action = updateMessageTextActionCreator(text);
      dispatch(action);
    },
    addNewMessage: () => {
      dispatch (addMessageActionCreator() );
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
