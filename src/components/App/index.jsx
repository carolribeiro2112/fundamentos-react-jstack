import React, { useState, createContext } from "react";
import Header from "../Header";
import Post from "../Post";
import { ThemeProvider } from "../../context/ThemeContext";

import styles from './App.scss';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Subtitle#01',
      likes: 20,
      read: false,
      removed: true,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Subtitle#02',
      likes: 10,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Title#03',
      subtitle: 'Subtitle#03',
      likes: 50,
      read: false,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState, 
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: 50
      },
    ]);
  };

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => post.id === postId 
        ? {...post, removed: true}
        : post
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>
          Posts da semana

          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr/>

      {
        posts.map(post=> (
          <Post
            key={post.id}
            onRemove={handleRemovePost}
            post={post}
          />
        ))
      }
    </ThemeProvider>
  );
};

export default App;