import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.content}>
      <div className={s.logo}>{props.logo}</div>
      <div className={s.description}>{props.name}</div>
      <div className={s.description}>{props.status}</div>
    </div>
  );
};

export default Friend;
