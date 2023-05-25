import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';
import dummyData from './dummy-data';

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState('');

  const likePost = postId => {
    setPosts(
      posts.map(post => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        } else {
          return post;
        }
      })
    );
  };

  return (
    <div className='App'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Posts posts={posts} likePost={likePost} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
