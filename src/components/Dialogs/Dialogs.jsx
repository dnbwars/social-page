import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  
  let dialogs = [
    { id: 1, name: "Jecka" },
    { id: 2, name: "Kristina" },
    { id: 3, name: "Erika" },
    { id: 4, name: "Alex" },
  ];

  let messages = [
    { id: 1, note: "Hi" },
    { id: 2, note: "How are you?" },
    { id: 3, note: "Cool" },
    { id: 4, note: "Never stop learning" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => (
    <Message message={m.note} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
        </div>
      <div className={s.messages}>
        {messagesElements}
        </div>
    </div>
  );
};

export default Dialogs;
