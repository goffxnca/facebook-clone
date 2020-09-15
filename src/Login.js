import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useCustomState } from "./StateProvider";
// import { actionTypes } from "./reducer";

function Login(props) {
  const [state, dispatch] = useCustomState();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://seeklogo.com/images/F/facebook-new-2019-logo-5A4671100B-seeklogo.com.png"
          className="login_circle_logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png"
          className="login_text_logo"
        />
      </div>

      <Button type="submit" onClick={handleSignIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
