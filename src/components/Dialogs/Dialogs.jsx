import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.note} id={m.id} />
  ));

  let addNewMessage = React.createRef();

  let addMessage = () => {
    let text = addNewMessage.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messageContainer}>
        <ul className={s.messages}>{messagesElements}</ul>
        <div className={s.createMessage}>
          <textarea className={s.input} ref={addNewMessage} placeholder="Введите сообщение"></textarea>
          <button onClick={addMessage} className={s.messageButton}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
