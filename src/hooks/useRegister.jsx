import { useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const registerUser = (e) => {
    e.preventDefault();
    const user = { name, lastname, number, email, password };
    console.log("Datos enviados:", user); 
    UserService.register(user)
      .then((response) => {
        if (response.data) {
          navigate("/login");
        } else {
          setErrorMessage(response.data.message);
        }
      })
      .catch((err) => {
        console.error("Error en el registro:", err);
        setErrorMessage("Error al registrar usuario");
      });
  };
  
  
  return {
    name,
    setName,
    lastname,
    setLastname,
    number,
    setNumber,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    registerUser
  };
};

export default useRegister;