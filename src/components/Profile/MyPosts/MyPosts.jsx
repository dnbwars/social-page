import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map (p => <Post message={p.message} likeCount={p.likeCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>
      <h3>My post</h3>
      <div className={s.posts}  >
        <div>
          <textarea ref="{newPostElement"></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

function HandleClick() {
  console.log('---', 'clicked')
}

//получаем из index => app => массив постов с лайками и сообщением через пропсы
export default MyPosts;
 