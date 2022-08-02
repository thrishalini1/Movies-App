// import './App.css';

// function App() {
//   return (
// <main className="container">
//   <h1>Hello World</h1>
// </main>
//   );
// }

// export default App;

// 2nd
// import React, { Component } from 'react';
// import Movies from './components/movies';
// import './App.css';

// function App() {
//   return (
//     <main className="container">
//       <Movies />
//     </main>
//   );
// }
// export default App;
import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";
import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/ProtectedRoute";
class App extends Component {
  state = {};
  componentDidMount() {
    // try {
    // const jwt = localStorage.getItem("token");
    // const user = jwtDecode(jwt);
    // // console.log(user);
    // this.setState({ user });
    const user = auth.getCurrentUser();
    this.setState({ user });
    // }
    // catch(ex) {}
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <NavBar user = {this.state.user} /> */}
        <NavBar user={user} />

        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            {/* <Route path="/movies/:id" component={MovieForm} /> */}
            {/* <Route path="/movies" component={Movies}/> */}
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
