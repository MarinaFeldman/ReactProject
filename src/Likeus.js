import { Component } from "react";
import heart1 from "./heart.png";
import heart2 from "./hearts.png"


export class Likeus extends Component{
state = {
massage:"Like my page",
image: heart1
} 

heartClicked = () => {
    this.setState({
        massage:"Love you too!",
        image: heart2
    })
}


render(){
return(
<div>
<div> 
{this.state.massage}

<img  onClick = {this.heartClicked} src={this.state.image} alt="heart" width="40px"/>
</div>
</div>

)}
}

