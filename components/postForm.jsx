import React from 'react';
import { BrowserRouter, Route, withRouter, Link } from 'react-router-dom'
import Trumbowyg from 'react-trumbowyg'

import 'react-trumbowyg/dist/trumbowyg.min.css'

export default class postForm extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            post: {},
            title: '',
            content: ''

        }
    }


    loadPost(id) {
        var url = this.props.url;
        var key = this.props.apikey;
        // var myHeaders = new Headers();
        fetch(url + 'api/v2/mongodb/_table/post/' + id, {
            query: '*',
            method: 'GET',
            headers: {
                "X-DreamFactory-API-Key": key,
                "Content-Type": 'application/json; charset=utf-8'
            }

        }).then((res) => res.json()).then((res) => {
            var post = res;
            console.log(post);
            this.setState({ post: post, title: post.title, content: post.content })
        });
    }


    componentDidMount() {
        if (this.props.match.params.postId) {
            this.loadPost(this.props.match.params.postId);

        }
    }
    changeTitleHandler(event) {
        this.setState({
            title: event.target.value
        });
    }
    changeContentHandler(event) {
        this.setState({
            content: event.target.innerHTML
        })
    }
    save() {
        var url = this.props.url;
        var key = this.props.apikey;
        // var myHeaders = new Headers();
        var obj = {};

        obj["title"] = this.state.title;
        obj["content"] = this.state.content;
        if (!this.props.match.params.postId) {
            fetch(url + 'api/v2/mongodb/_table/post', {
                body: JSON.stringify({ "resource": [obj] }), method: 'POST', headers: {
                    "X-DreamFactory-API-Key": key,
                    "Content-Type": "application/json"
                }
            }).then((res) => res.json()).then((res) => {
                this.props.history.push('/');

            });
        }
        else {
            fetch(url + 'api/v2/mongodb/_table/post/' + this.state.post._id, {
                body: JSON.stringify(obj), method: 'PUT', headers: {
                    "X-DreamFactory-API-Key": key,
                    "Content-Type": "application/json"
                }
            }).then((res) => res.json()).then((res) => {
                this.props.history.push('/');
            });
        }
    }
    render() {
        return (
            <div>
                title:  <input type="text" value={this.state.title} onChange={this.changeTitleHandler.bind(this)} />
                {/*content:<input type="text" value={this.state.content} onChange={this.changeContentHandler.bind(this)} />*/}
                <Trumbowyg
                    buttons={
                        [
                            ['formatting'],
                            'btnGrp-semantic',
                            ['link'],
                            ['insertImage'],
                            'btnGrp-justify',
                            'btnGrp-lists',
                            ['fullscreen']
                        ]
                    }
                    data={this.state.content}
                    placeholder='Type your text!'
                    onChange={this.changeContentHandler.bind(this)}
                />

                <button onClick={this.save.bind(this)}>Save</button>
            </div>
        )
    }

}

