import "../../App.scss";
import { useRef, useContext } from 'react';
import { fetchURL } from "../../App";
import { AppContext } from '../context/userContext'
import { Navigate } from "react-router-dom";

export const Login = () => {

const {setLoginToken, loginToken, logedUserData, setLogedUserData} = useContext(AppContext)

  const loginRef = useRef();
  const loginPasswordRef = useRef()

  const getLoginData = async (e)  => {
    e.preventDefault()

    const loginData = {
      username: loginRef.current.value,
      password: loginPasswordRef.current.value
    }
    console.log(loginData)
    const response = await fetch(`${fetchURL}/login`,
    {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    const data = await response.json()
<<<<<<< HEAD
    console.log("Data", {data})
    setLoginToken(data.generateToken)
    
    //return <Navigate to="/dashboard" />
=======
    setLoginToken(data.generateToken)
    console.log(data.userData)
    setLogedUserData(data.userData)

    if(loginToken && logedUserData){
      return <Navigate from="/login" to="/dashboard" replace /> // useNavigate
    } 
>>>>>>> twitchDashboard
  }

    return (
        <section>
          <article className="signArticle">
            <form className="form" onSubmit={getLoginData}>
              <label htmlFor="ln">LoginName</label>
              <input ref={loginRef} type="text" id="ln"/>
              <label htmlFor="lp">LoginPassword</label>
              <input ref={loginPasswordRef} type="password" id="lp" />
              <input type="submit" value="SignIn" ></input>
            </form> 
          </article>
        </section>
    )
}