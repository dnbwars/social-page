import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      my post
      <div className={s.posts}>
        <textarea></textarea>
        <button>Add post</button>
        </div>
        <Post message="Hi. How are you?" likecount="12"/>
        <Post message="text 1" likecount="11"/>
    </div>
  );
};

export default MyPosts;
