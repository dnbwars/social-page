import React from "react";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState();

  let addNewMessage = () => {
    props.store.dispatch( addMessageActionCreator() );
  }

  let onMessageChange = (text) => {
    let action = updateMessageTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
  <Dialogs updateNewMessageText={onMessageChange} addMessage={addNewMessage} 
  dialogs={state.dialogsPage.dialogs}
  messages={state.dialogsPage.messages}
  />
  );
};

export default DialogsContainer;
