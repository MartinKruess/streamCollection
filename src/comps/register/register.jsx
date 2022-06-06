import "../../App.scss";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { inputTemp } from "./registerInputs"
import { FormInputs } from "./formInputs"
import { generatePassword } from "./passwordGenerator";
import { fetchURL } from "../../App";

export const Register = () => {
  const onChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const [registerData, setRegisterData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const getPassword = async () => {
    const newPassword = await generatePassword()
    setRegisterData({ ...registerData, "confirmPassword": newPassword, "password": newPassword })
  };

  const password = registerData.password === registerData.confirmPassword && registerData.password.length > 9
  const isFilled = registerData.email.length > 5 && registerData.firstname.length > 2 && registerData.lastname.length > 5 && registerData.username.length > 5

  if (password === true && isFilled === true) {
    console.log("YES")
  } else {
    console.log("NO")
  }

  const getUserId = async (e) => {
    e.preventDefault()
    const isValidatated = validateData(registerData)
    if (isValidatated === false) return

    const result = await fetch(`${fetchURL}/register`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      }
    )
  }

  return (
    <section>
      <article className="signArticle">
        <div className="signContainer">
          <h2 className="dark">Sign Up</h2>
          <form className="form" onSubmit={(e) => getUserId(e)}>
            {inputTemp.map((input) => (
              <FormInputs key={input.id} {...input} value={registerData[inputTemp.name]} onChange={onChange} />
            ))}
            {/* registerData.password ?  */}
            <input type="button" value="Generate Password" onClick={() => getPassword()} />
            <input type="submit" value="Sign Up" />
            <Link to="/login"></Link>
          </form>
        </div>
      </article>
    </section>
  )
}