import { useState } from "react"

export const registerStates = () => {
    const [registerData, setRegisterData] = useState({
      mail: "",
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: ""
    })
    return {
      registerData, setRegisterData
    }
  }