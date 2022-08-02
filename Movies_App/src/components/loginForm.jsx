// handleChanges = e => {
//   const account = { ...this.state.account };
//   account.username = e.currentTarget.value;
//   this.setState({ account });
// }
// handleChangep = e => {
//   const account = { ...this.state.account };
//   account.password = e.currentTarget.value;
//   this.setState({ account });
// }
// handleChange = e => {
//   const account = { ...this.state.account };
//   // account.username = e.currentTarget.value;
//   account[e.currentTarget.id] = e.currentTarget.value;
//   this.setState({ account });
// }

// handleChange = ({ currentTarget: input }) => {
//   const account = { ...this.state.account };
//   account[input.name] = input.value;
//   this.setState({ account });
// }
// validateProperty = ({ name, value }) => {
//   // if (name === 'username') {
//   //   if (value.trim() === '') return 'Username is required.';
//   // }
//   // if (name === 'password') {
//   //   if (value.trim() === '') return 'Password is required.';
//   // }
//   const obj = ({ name, value }) => {
//     const obj = { [name]: value };
//     const schema = { [name]: this.schema[name] };
//     const {error} = Joi.validate(obj, schema);
//     return error ? error.details[0].message : null;
//   }

// }

// handleChange = ({ currentTarget: input }) => {
//   const errors = { ...this.state.errors };
//   const errorMessage = this.validateProperty(input);
//   if (errorMessage) errors[input.name] = errorMessage;
//   else delete errors[input.name];

//   const account = { ...this.state.account };
//   account[input.name] = input.value;

//   this.setState({ account,errors });
// };
// schema = {
//   username: Joi.string().required().label("username"),
//   password: Joi.string().required().label("password"),
// }

// validate = () => {
//   const options = {abortEarly:false}
//   const {error} = Joi.validate(this.state.account, this.schema,options);
//   if(!error) return null;

//   const errors = {};
//   for(let item of error.details)
//     errors[item.path[0]] = item.message;
//   return errors;

// validate = () => {
//   const errors = {};

//   // if (this.state.account.username.trim() === '')
//   //   errors.username = 'Username is required.'

//   const { account } = this.state;

//   if (account.username.trim() === '')
//     errors.username = 'Username is required.'
//   if (account.password.trim() === '')
//     errors.password = 'Password is required.'

//   // return { username: "Username is required." };

//   return Object.keys(errors).length === 0 ? null : errors;

// handleSubmit = (e) => {
//   e.preventDefault();

//   const errors = this.validate();
//   console.log(errors);

//   this.setState({ errors:errors||{} });
//   if (errors) return;
//   this.doSubmit();
//   // call the server
//   //console.log("Submitted");
// };
import React, { Component } from "react";
//import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";


class LoginForm extends Form {
  // username = React.createRef();
  //   componentDidMount() {
  //     this.username.current.focus();

  state = {
    data: { username: "", password: "" },

    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  //doSubmit = async() => {
//     try {
//     const { data } = this.state;
//     // const { data: jwt } = 
//     await auth.login(data.username,data.password);
//     // console.log(jwt);
//    // localStorage.setItem("token", jwt);
//     // this.props.history.push('/');
//     window.location = '/';
// } catch (ex) {
  doSubmit = async() => {
    try {
    const { data } = this.state;
    await auth.login(data.username, data.password);
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    
  }
  };
 
    render() {
      if (auth.getCurrentUser()) return <Redirect to="/" />;
      return (
      <div>
        <h1>
          {" "}
          Login
          {/* form>(div.form-group>label+input.form-control)*2 */}
          <form onSubmit={this.handleSubmit}>
            {/* <Input 
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          /> */}

            {/* <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input
                autoFocus
                value={account.username}
                onChange={this.handleChange}
                name="username"
                id="username"
                type="text"
                className="form-control"
                

              />
            </div> */}
            {/* <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                value={account.password}                
                onChange={this.handleChange}
                name="password"
                id="password"
                type="text"
                className="form-control"
                

              />
            </div> */}
            {/* <button disabled={this.validate()}
             className="btn btn-primary">Login</button> */}
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </h1>
      </div>
    );
  }
}
export default LoginForm;
