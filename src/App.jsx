import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";


function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Subtitle#01',
      likes: 20
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Subtitle#02',
      likes: 10
    },
    {
      id: Math.random(),
      title: 'Title#03',
      subtitle: 'Subtitle#03',
      likes: 50
    },
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState, 
        {
          id: Math.random(),
          title: `Title#0${prevState.length + 1}`,
          subtitle: `Subtitle#0${prevState.length + 1}`,
          likes: 50
        },
      ]);
    }, 2000)
  };

  return (
    <>
      <Header>
        <h2>
          Posts da semana

          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr/>

      {
        posts.map(post=> (
          <Post
            key={post.id}
            likes={post.likes}
            post={{
              title:post.title,
              subtitle: post.subtitle
            }}
          />
        ))
      }
    </>
  );
};

export default App;