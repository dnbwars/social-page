import React from "react";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer> 
      { (store) => {

        let state = store.getState();

        let addNewMessage = () => {
          store.dispatch( addMessageActionCreator() );
        }
      
        let onMessageChange = (text) => {
          let action = updateMessageTextActionCreator(text);
          store.dispatch(action);
        }

        return <Dialogs updateNewMessageText={onMessageChange} 
              addMessage={addNewMessage} 
              dialogs={state.dialogsPage.dialogs}
              messages={state.dialogsPage.messages}/>
            }
      }
  </StoreContext.Consumer>
  );
};

export default DialogsContainer;
