import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer> 
//       { (store) => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch( addPostActionCreator() );
//         }
      
//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         }
      
//         return <MyPosts updateNewPostText={onPostChange} 
//               addPost={addPost} 
//               posts={state.profilePage.posts} 
//               newPostText={state.profilePage.newPostText} />}
//               }
//     </StoreContext.Consumer>
//     )
//   };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts, 
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch( addPostActionCreator() );
    }
}
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts); 

export default MyPostContainer;

//получаем из index => app => массив постов с лайками и сообщением через пропсы