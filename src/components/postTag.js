import '../CSS/myStyles.css'
import React, { useState } from 'react'

export const PostTag = (props) => {
    const { size, price , post} = props;
    var list = []
    const [ heartcolor, setHeartColor ] = useState("red");
    const changeColour = () => {
        if( heartcolor === "red" )
        {
           setHeartColor("heartcolor");
            list.push(post);
            console.log(post, "insdide");
        }
        else { setHeartColor("red");
              list.forEach(l => {
                  if (l.id === post.id) {    
                    const index = list.indexOf(post.id)
                    if (index > -1) {
                    list.splice(index, 1);
                    }
                  }
              })
          }
        }
    console.log(list);
    return (
        <div className="tag">
            <div className={`${heartcolor} red`} onClick= { changeColour} >&#x2764;</div>
            <div>
                Size<span className="border">{size}</span>
            </div> 
            <div>
                Price<span className="border">&#x20B9;{price}/-</span>
            </div>
            <div className="border"> &#128722;</div>
        </div>
    )
}
