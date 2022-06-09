import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map (d => <DialogItem name={d.name} id={d.id} /> );

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.note} id={m.id} /> );

  let addNewMessage = React.createRef();

  let addMessage = () => {
    props.dispatch( { type: 'ADD-MESSAGE'} );
  }
  let onMessageChange = () => {
    let text = addNewMessage.current.value;
    let action = {type: 'UPDATE-MESSAGE-TEXT', newText: text};
    props.dispatch(action);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messageContainer}>
        <ul className={s.messages}>{messagesElements}</ul>
        <div className={s.createMessage}>
          <textarea  onChange={ onMessageChange } className={s.input} ref={addNewMessage} value={props.newMessageText}/>
          <button onClick={ addMessage } className={s.messageButton}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
