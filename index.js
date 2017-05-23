import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import PostList from './components/postList.jsx';
import PostView from './components/postView.jsx';
import PostForm from './components/postForm.jsx';
import { BrowserRouter, Route ,HashRouter,Switch} from 'react-router-dom';


const INSTANCE_URL = 'http://ec2-34-210-239-98.us-west-2.compute.amazonaws.com/';
const APP_API_KEY = 'cc61dfb292de588c48f9eb39e0f9b61c527687c37a184eac3f43c34c6025246a';
const VERSION = '1.0.1';

class postListWrapper extends React.Component{
    render(){
        return(
            <PostList url={INSTANCE_URL} apikey={APP_API_KEY} {...this.props}/>
        )
    }
}
class postFormWrapper extends React.Component{
    render(){
        return(
            <PostForm url={INSTANCE_URL} apikey={APP_API_KEY} {...this.props}/>
        )
    }
}
class postViewWrapper extends React.Component{
    render(){
        return(
            <PostView url={INSTANCE_URL} apikey={APP_API_KEY} {...this.props}/>
        )
    }
}

ReactDOM.render(
    <HashRouter>
        <Switch>
           
            <Route exact path="/app" component={App} />
            <Route exact path="/create/:postId?" component={postFormWrapper}/>
            <Route exact path="/view/:postId" component={postViewWrapper} />
             <Route exact path="/"  component={postListWrapper} />
       </Switch>
    </HashRouter>
    , document.getElementById('content'));