import React from "react";
import { Facebook, Google, GooglePlay } from "react-bootstrap-icons";
import { Link, Route, routes } from "react-router-dom";
import { InpputForm } from "../../components/FormComp/InputForm";
import "./signIn.css";
import { GoogleSignIn } from "../../firebase/firebase.utils";
import * as _ from 'lodash'
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      email: "",
      password: "",
    };
  }
  ChangeHandle = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, (name) => {
      this.state.email.includes("@")
        ? this.setState({ isValid: true })
        : this.setState({ isValid: false });
    });
    // console.log(this.state);

    // console.log(event.target.value,this.state.email)
  };
  submitHandler = (event) => {
    console.log(event.target.f.value)
    event.preventDefault();
  };
  render() {
    {{ console.log('lodash:::', _) }}
    // {console.log(this.state.isValid,this.state.email)}
    return (
      <div className="sign-in-container">
        {!this.state.isValid ? (
          <a className="warn">enter valid username!</a>
        ) : (
          <a className="warn-default">a</a>
        )}
        <form onSubmit={this.submitHandler}>
          <InpputForm
            validOutline={!this.state.isValid ? "not-valid" : "valid"}
            changeHandler={this.ChangeHandle}
            type={"text"}
            id="f"

            name={"email"}
            value={this.state.email}
            Label={"email"}
          />
          <InpputForm
            changeHandler={this.ChangeHandle}
            type={"password"}
            name={"password"}
            value={this.state.password}
            Label={"password"}
          />
          <input className="remember" type={"checkbox"}></input>
          <label>
            <a className="remember">Remember password </a>
            <a className="forgot">
              <Link className="s">forgot password?</Link>
            </a>
          </label>

          {/* <button
          id="fffff"
            type="submit"
            className={"sign-in-button"}
            value={"SIGN IN"}
          /> */}
        </form>
        
        <button className={"sign-in-button google"} onClick={GoogleSignIn}>
          <Google></Google> Google
        </button>
        <button className={"sign-in-button facebook"}>
          <Facebook /> Facebook
        </button>
       
      </div>
    );
  }
}
export default SignIn;
