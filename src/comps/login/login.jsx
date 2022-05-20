import "../../App.scss";
import { useRef } from 'react';
import { fetchURL } from "../../App";


export const Login = () => {

  const loginRef = useRef();
  const loginPasswordRef = useRef()


  const getLoginData = async (e)  => {
    e.preventDefault()

    const loginData = {
      username: loginRef.current.value,
      password: loginPasswordRef.current.value
    }
    console.log(loginData)
    const result = await fetch(`${fetchURL}/login`,
    {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    console.log(res)
  }

    return (
        <section>
          <article className="signArticle">
            <form className="form" onSubmit={getLoginData}>
              <label htmlFor="ln">LoginName</label>
              <input ref={loginRef} type="text" id="ln"/>
              <label htmlFor="lp">LoginPassword</label>
              <input ref={loginPasswordRef} type="password" id="lp" />
              <input type="submit" value="SignIn" />
            </form> 
          </article>
        </section>
   
    )
}