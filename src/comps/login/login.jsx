import "../../App.scss";
import { useRef, useContext } from "react";
import { fetchURL } from "../../App";
import { AppContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { setLoginToken, loginToken, logedUserData, setLogedUserData } =
    useContext(AppContext);

  const loginRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();

  const getLoginData = async (e) => {
    e.preventDefault();
    const loginData = {
      username: loginRef.current.value,
      password: loginPasswordRef.current.value,
    };

    const response = await fetch(`${fetchURL}/user/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    });
    console.log("Login: response", response);
    const data = await response.json();
    setLoginToken(data.generateToken);
    setLogedUserData(data.userData);
    navigate("/dashboard", { replace: true });
  };

  return (
    <section>
      <article className="signArticle">
        <form className="form" onSubmit={getLoginData}>
          <label htmlFor="ln">LoginName</label>
          <input ref={loginRef} type="text" id="ln" />
          <label htmlFor="lp">LoginPassword</label>
          <input ref={loginPasswordRef} type="password" id="lp" />
          <input type="submit" value="SignIn"></input>
        </form>
      </article>
    </section>
  );
};
