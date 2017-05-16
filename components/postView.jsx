import React from 'react';

export default class postList extends React.Component{

    constructor(props){
        debugger;
        super(props);
        this.state={
        post:{}
        }
    }

componentDidMount(){
this.setState({post:this.props.post})
}
render(){
    return(
    <div>
    <h2>
    {this.state.post.title}
    </h2>
    <p>{this.state.post.content}</p>
    <button >Edit Post</button>
    </div>
    )
}
}