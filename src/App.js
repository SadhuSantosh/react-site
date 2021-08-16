import './App.css';
import React, { useState } from 'react';
import Post from './components/post'
import WishList  from "./components/wishList";
import './CSS/myStyles.css'
import Img from'./assets/image.jpg'

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <React.Fragment>
      <nav className="navbar">
       <img id="logo" src={Img} alt="logo"/>
       <p id="website">Shopline.com</p>
       <ul id="menu">
           <li id="home"><a href="#">Home</a></li>
           <li id="Whishlist"><a onClick = { handleOpen } >Whishlist</a></li>
           <li id="Cart"><a href="#">Cart</a></li>
           <li id="Contact"><a href="mailto:sadhusantoshkumar@gmail.com">Contact</a></li>
       </ul>
      </nav>
      <Post />
      {
        open 
        ? <WishList
           open = { open }
           handleClose = { handleClose }
         />
        : null
      }
    </React.Fragment>
  );
}

export default App;
