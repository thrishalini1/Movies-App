// import { Component } from "react";

// class Logout extends Component {
//   componentDidMount() {
//       console.log("out");
//     localStorage.removeItem("token");
//     window.location = "/";
//     //this.props.history.push('/');
//     console.log("out2");
//   }
//   render() {
//     return null;
//     console.log("out3");
//   }
// }
// export default Logout;
import { Component } from "react";
import auth from "../services/authService";
class Logout extends Component {
componentDidMount() {
// localStorage.removeItem('token');
auth.logout();
window.location = "/";
}
render() {
return null;
}
}
export default Logout;