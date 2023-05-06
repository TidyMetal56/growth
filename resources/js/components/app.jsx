import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";
import "../bootstrap";
import ReactDOM from "react-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    );
  }
}

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
