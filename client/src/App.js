import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import Search from "./pages/search";
import Saved from "./pages/saved"


class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Header />
       <Form />
       <Switch>
       <Route exact path="/" component={Search}/> */}
       <Route path="/Saved" component={Saved}/>
        </Switch>
       
      
      </div>
     </Router>
    );
  }
}

export default App;
