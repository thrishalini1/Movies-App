// import React, { Component } from 'react';
// import Form from './common/form';
// import Joi  from 'joi-browser';
// class RegisterForm extends Form {
//     state = {
//         data: {username: '', password:'',name:''},

//         errors: {}
//       };
//       schema = {
//         username: Joi.string().required().email().label("username"),
//         password: Joi.string().required().min(5).label("password"),
//         name: Joi.string().required().label("name"),
//       }

//     render() {
//         return    (   <div>
//         <h1>
//           {" "}
//           Register
//           {/* form>(div.form-group>label+input.form-control)*2 */}
//           <form onSubmit={this.handleSubmit}>

//           {this.renderInput("username","Username")}
//              {this.renderInput("password","Password","password")}
//              {this.renderInput("name","name")}
//              {this.renderButton("Register")}

//           </form>
//         </h1>
//       </div>
//     );
//         }
//     }
// export default RegisterForm;
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    // Call the server
    // console.log("Submitted");
    //await userService.register(this.state.data);
    try {
      // await userService.register(this.state.data);
      // const response = await
      //userService.register(this.state.data);
      // console.log(response);
      const response = await
userService.register(this.state.data);
auth.loginWithJwt(response.headers['x-auth-token']);
window.location = '/';

      } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  
  };



  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
