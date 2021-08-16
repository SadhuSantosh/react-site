import React, { useState } from 'react'
import '../CSS/myStyles.css'
import  { PostTag }  from  './postTag';

const data=[
    {
        id:1,
        Image: "https://assets.ajio.com/medias/sys_master/root/hb7/h2a/13875345555486/-473Wx593H-460341833-navy-MODEL.jpg",
        size: 'S' ,
        price: 350
    },
    {   id:2,
        Image:"https://assets.ajio.com/medias/sys_master/root/20201103/niiM/5fa053a5aeb269d563f6fa0e/-473Wx593H-460559507-navy-MODEL.jpg",
        size:'L',
        price:550
     },
     {
        id:3,
        Image:"https://assets.ajio.com/medias/sys_master/root/20210403/knDC/6068642ff997dd7b645d4a81/-473Wx593H-461118551-black-MODEL2.jpg",
        size:'XL',
        price:600
     },
     {
         id:4, 
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTv4meLd3TRHNbUcPxWIHXiQz9SjSCXojg&usqp=CAU",
        size:'M',
        price:900
     },
     {
         id:5,
         Image:"https://assets.ajio.com/medias/sys_master/root/20201017/NWSb/5f89f364aeb269d563e22ca1/-473Wx593H-460767231-grey-MODEL.jpg",
         size:'S',
         price:899
     },
     {
         id:6,
         Image:"https://assets.ajio.com/medias/sys_master/root/20200919/GZ4w/5f65fd47aeb269d563c63957/-473Wx593H-460722462-blue-MODEL.jpg",
         size:'L',
         price:670
     },
     {
         id:7,
         Image:"https://i.pinimg.com/236x/ce/20/c8/ce20c8cd28c06a65024303f7ce0e1974.jpg",
         size:'L',
         price:580
     },
     {
         id:8,
         Image:"https://assets.ajio.com/medias/sys_master/root/hf4/h3a/15765078769694/-473Wx593H-460580266-brown-MODEL.jpg",
         size:'S',
         price:700
     },
     {   id:9,
         Image:"https://assets.ajio.com/medias/sys_master/root/20201103/niiM/5fa053a5aeb269d563f6fa0e/-473Wx593H-460559507-navy-MODEL.jpg",
         size:'L',
         price:550
     },
     {
         id:10,
         Image:"https://assets.ajio.com/medias/sys_master/root/20200919/GZ4w/5f65fd47aeb269d563c63957/-473Wx593H-460722462-blue-MODEL.jpg",
         size:'L',
         price:670
   },
   {
         id:11, 
         Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTv4meLd3TRHNbUcPxWIHXiQz9SjSCXojg&usqp=CAU",
         size:'M',
         price:900
    },
    {
         id:12,
         Image: "https://assets.ajio.com/medias/sys_master/root/hb7/h2a/13875345555486/-473Wx593H-460341833-navy-MODEL.jpg",
         size: 'S',
         price: 350
   }

]
 

const post = () => {
    return ( 
        <div className="main1">
            Hover over item to view details.
            <div className="main">
                {data.map((post) => {
                    return (
                        <section className="post" key={post.id}>
                            <img src={post.Image} alt="logo"/>
                            <PostTag 
                                price = { post.price }
                                size = { post.size }
                                post = { post }
                            /> 
                        </section>
                        )
                })}
            </div>
        </div>
    )
}

export default post;


