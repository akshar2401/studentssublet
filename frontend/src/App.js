import React from 'react';
import './App.css';
import Browse from "./Components/Browse/Browse"
import Login from './Components/LogIn/Login';
import Signup from './Components/Singup/Signup';
import PostListing from './Components/PostListing/postListing'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Detail from './Components/Detail/detail';


function App() {
  return (
    <div className="App">
        <Router>  
          <Switch>
            <Route path = "/" exact component =  {Login}>
            </Route>
            <Route path = "/signup" exact component = {Signup}></Route>
            <Route path = "/post" exact component = {PostListing}></Route>
            <Route path = "/browse" exact component = {Browse} /> 
            <Route path = "/addPost" exact component = {PostListing}></Route> 
            <Route path = "/detail/:id"  component = {Detail} />

          </Switch>

        </Router>
    </div>
  )
}

export default App;
