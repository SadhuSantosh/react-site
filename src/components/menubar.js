import React from 'react'
import Img from'../assets/image.jpg'
import '../CSS/myStyles.css'

function menubar() {
    return (
        <nav className="navbar">
       <img id="logo" src={Img} alt="logo"/>
       <p id="website">Shopline.com</p>
       <ul id="menu">
           <li id="home"><a href="#">Home</a></li>
           <li id="Whishlist"><a href="#">Whishlist</a></li>
           <li id="Cart"><a href="#">Cart</a></li>
           <li id="Contact"><a href="mailto:sadhusantoshkumar@gmail.com">Contact</a></li>
       </ul>

    </nav>
    )
}

export default menubar
