import React from 'react';
import { BrowserRouter, Route, withRouter, Link } from 'react-router-dom'

// const PostItems=({post})=>
// {
//     return(
//         <Link to="/view">
//         </Link>
//     )
// }


export default class postList extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.loadPosts();
    }

    createPost(){
        this.props.history.push('/create')
    }

    loadPosts() {
       
        var url = this.props.url;
        var key = this.props.apikey;
        fetch(url + 'api/v2/mongodb/_table/post', {
                method: 'GET', headers: {
                    "X-DreamFactory-API-Key": key,
                    "Content-Type": "application/json"
                }
                }).then((res)=>res.json()).then((res)=>
        {
                var post=res.resource;
                this.setState({ posts: post })
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.createPost.bind(this)}>Create a new Post</button>
                {
                    this.state.posts.map(post => {
                        return (<div key={post._id}>
                            <Link to={'view/' + post._id}>
                            <h4> {post.title} </h4>
                            <h6>{ post.content}</h6>
                    </Link>
                        </div>);

                    }
                    )
                }
            </div>
        )
    }

}