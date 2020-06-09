// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";


// pass props in this file to
const Post = props => {
  const { postData } = props

  const [likes, setLikes] = useState(postData.likes)
  // set up state for the likes

  const likesUpdater = () => {
    setLikes(likes + 1)
  }

  return (
    <div className="post-border">
      <PostHeader
        username={postData.username}
        thumbnailUrl={
          postData.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={postData.imageUrl}
        />
      </div>
      <LikeSection updater={likesUpdater} likes={likes}/>
      <CommentSection
        postId={postData.imageUrl}
        comments={postData.comments}
      />
    </div>
  );
};

export default Post;
