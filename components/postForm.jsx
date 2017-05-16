import React from 'react';
import { BrowserRouter, Route, withRouter, Link } from 'react-router-dom'

export default class postForm extends React.Component {
    constructor() {
        super();
        this.state = {
            posts:[],
                title:'',
                content:''
                
        }
    }

    componentDidMount()
    {
        var newPosts=localStorage.getItem('posts')?JSON.parse(localStorage.getItem('posts')):[];
        this.setState({posts:newPosts})
    }
    changeTitleHandler(event) {
        this.setState({
            title:event.target.value
        });
    }
    changeContentHandler(event)
    {
         this.setState({
            content:event.target.value
        })
    }
    add()
    {
        debugger;
         var newPosts=[];
        newPosts=this.state.posts;
        var newPost={};
        newPost.id=newPosts.length+1;
        newPost.title=this.state.title;
        newPost.content=this.state.content;
        newPosts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(newPosts));
        this.setState({posts:newPosts,title:'',content:'' })
    }
    render() {
        return (
            <div>
              title:  <input type="text" value={this.state.title} onChange={this.changeTitleHandler.bind(this)} />
                content:<input type="text" value={this.state.content} onChange={this.changeContentHandler.bind(this)} />
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        )
    }

}

