import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import PostList from './components/postList.jsx';
import PostView from './components/postView.jsx';
import PostForm from './components/postForm.jsx'
// import {Router,Route,Link,hashHistory} from 'react-router';
import { BrowserRouter, Route ,HashRouter,Switch} from 'react-router-dom'


// class postListWrapper extends React.Component{
//     render(){
//         return(
//             <po
//         )
//     }
// }

ReactDOM.render(
    <HashRouter>
        <Switch>
           
            <Route exact path="/app" component={App} />
            <Route exact path="/create" component={PostForm} />
            <Route path="view/:postId" component={PostView} />
             <Route exact path="/"  component={PostList} />
       </Switch>
    </HashRouter>
    , document.getElementById('content'));