import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  // console.log(email);
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault(); //help not to refresh
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.acisolutions.net/wp-content/uploads/2019/09/amazon-logo-vector-png-amazon-logo-vector-512.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email-id</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          These "Conditions of Use" constitute an electronic record within the
          meaning of the applicable law. This electronic record is generated by
          a computer system and does not require any physical or digital
          signatures.
        </p>
        <button className="login_RegisterInButton" onClick={register}>
          Create an Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
