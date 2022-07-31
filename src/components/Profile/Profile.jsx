import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
debugger
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

//получаем из index => app => массив с постами через пропсы

export default Profile;
