import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.content}>
      <div className={s.logo}></div>
      <div className={s.description}>{props.name}</div>
    </div>
  );
};

export default Friend;
