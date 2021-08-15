import '../CSS/myStyles.css'
import React, { Component } from 'react'

class postTag extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            heartcolorRed : "red"
        }
    }
    changeColour(){
        this.setState({
            heartcolorRed : this.state.heartcolorRed==="heartcolor" ? "red" : "heartcolor"
        })
    }
    
    render() {
       
            return (
                <div className="tag">
                    <div className={`${this.state.heartcolorRed} red`} onClick={()=>this.changeColour()} >&#x2764;</div>
                    <div>
                        Size<span className="border">{this.props.data.size}</span>
                    </div> 
                    <div>
                        Price<span className="border">&#x20B9;{this.props.data.price}/-</span>
                    </div>
                    <div className="border"> &#128722;</div>
                </div>
            )
        
    }
}

export default postTag
