import React from 'react';
import renderHTML from 'react-render-html';

export default class postList extends React.Component {

    constructor() {

        super();
        this.state = {
            post: {
                title:"",
                content:""
            }
        }
    }
    deletePost(event)
{
     var url = this.props.url;
        var key = this.props.apikey;
    fetch(url + 'api/v2/mongodb/_table/post/' + this.state.post._id, {
            query: '*',
            method: 'DELETE',
            headers: {
                "X-DreamFactory-API-Key": key,
                "Content-Type": 'application/json; charset=utf-8'
            }

        }).then((res) => res.json()).then((res) => {
            this.props.history.push('/');
        });
}
    loadPost(id) {
        var url = this.props.url;
        var key = this.props.apikey;
        fetch(url + 'api/v2/mongodb/_table/post/' + id, {
            query: '*',
            method: 'GET',
            headers: {
                "X-DreamFactory-API-Key": key,
                "Content-Type": 'application/json; charset=utf-8'
            }

        }).then((res) => res.json()).then((res) => {
            var post = res;
            this.setState({ post: post })
        });
    }
    componentDidMount() {
        var id = this.props.match.params.postId;
        this.loadPost(id);
    }
    render() {
        return (
            <div>
                <h2>
                    {this.state.post.title}
                </h2>

               {renderHTML(this.state.post.content)}
                <button onClick={() => this.props.history.push('/create/' + this.state.post._id)}>Edit Post</button>
                 <button onClick={this.deletePost.bind(this)}>Delete</button>
            </div>
        )
    }
}