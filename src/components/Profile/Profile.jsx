import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://wallpaperaccess.com/full/187161.jpg" />
      </div>
      <div>ava + desc</div>
      <MyPosts name="my test props"/>
      </div> 
  );
};

export default Profile;
