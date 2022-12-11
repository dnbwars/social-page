import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map (p => <Post message={p.message} likeCount={p.likeCount} /> );

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.posts}  >
        <div>
          <textarea class="input_field" onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button class="g_button" onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};


//получаем из index => app => массив постов с лайками и сообщением через пропсы
export default MyPosts;
 