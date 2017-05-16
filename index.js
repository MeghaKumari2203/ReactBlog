import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import PostList from './components/postList.jsx';
import PostView from './components/postView.jsx';
import PostForm from './components/postForm.jsx'
// import {Router,Route,Link,hashHistory} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'


// class postListWrapper extends React.Component{
//     render(){
//         return(
//             <po
//         )
//     }
// }

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={PostList} />
            <Route path="/app" component={App} />
            <Route path="/create" component={PostForm} />
            <Route path="/view/:postId" component={PostView} />
        </div>
    </BrowserRouter>
    , document.getElementById('content'));