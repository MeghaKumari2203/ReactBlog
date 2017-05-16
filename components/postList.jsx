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

    loadPosts() {
        var postsAll = [
            {
                id: 1,
                title: "Ankita",
                content: "aswsdffghjkkjkbvcrt vcttcrtvybuyh"
            },
            {
                id: 2,
                title: "Megha",
                content: "cfytgyvubhuinhj vcttcrtvybuyh"
            },
            {
                id: 3,
                title: "Prapti",
                content: "kugobhkvhjk vcttcrtvybuyh"
            },
            {
                id: 4,
                title: "Nidhi",
                content: "dcjkcdjkdjkd vcttcrtvybuyh"
            }
        ];
        this.setState({ posts: postsAll })
    }
    render() {
        return (
            <div>
                <Link to={'create'}>Create a new Post</Link>
                {
                    this.state.posts.map(post => {
                        return (<div key={post.id}>
                            <Link to={'/view/' + post.id}>GoTo view</Link>
                            <label> {post.id} </label>
                            <h4> {post.title} </h4>
                            <h6> {post.content} </h6>
                        </div>);

                    }
                    )
                }
            </div>
        )
    }

}