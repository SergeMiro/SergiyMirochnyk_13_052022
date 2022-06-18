import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import css
import "./index.css";
//import components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
//import store
import { store } from "./utils/Store";

ReactDOM.render(
  // The Provider must encompass the entire application
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
