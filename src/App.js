import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddBlog from "./components/AddBlog/AddBlog";
import Blogs from "./components/Blogs/Blogs";
import Home from './components/Home/Home';
import PostDetails from "./components/PostDetails/PostDetails";
import Login from "./components/Login/Login";

function App() {
 
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route path="/addblog">
            <AddBlog />
          </Route>
          <Route path="/event/:_id">
             <PostDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
