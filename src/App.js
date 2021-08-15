import './App.css';
import React from 'react';
import Post from './components/post'
import Menu from './components/menubar'
function App() {
  return (
    <React.Fragment>
      <Menu />
      <Post />
    </React.Fragment>
  );
}

export default App;
