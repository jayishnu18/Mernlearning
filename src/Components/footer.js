import { Component } from "react";
export class Footer extends Component{
    render(){
        return(
            <div>
                <h1>Hello  </h1>
                <h1>{this.props.name} {this.props.age}</h1>
            </div>
        )
    }
} 