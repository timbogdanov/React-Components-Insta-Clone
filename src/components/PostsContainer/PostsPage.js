//Complete the necessary code in this file
// import useState
import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from '../../dummy-data'

const PostsPage = () => {
  const [posts, setPosts] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        posts.map(post => {
          return <Post key={post.id} postData={post} />
        })
      }
    </div>
  );
};

export default PostsPage;
