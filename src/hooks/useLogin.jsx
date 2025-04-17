import { useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import useUser from '@/hooks/useUser'; 

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();
  const { login } = useUser(); // <- usamos el contexto

  const loginUser = (e) => {
    e.preventDefault();
    const user = { email, password };
    UserService.login(user)
      .then((response) => {
        const data = response.data;

        if (data.error) {
          setErrorMessage(data.error);
        } else {
          login(data.user); // <- guardamos en el contexto
          if (data.user.admin) {
            navigate("/dashboard");
          } else {
            navigate("/index");
          }
        }
      })
      .catch((err) => {
        console.error("Error al iniciar sesión:", err);
        setErrorMessage("Error al iniciar sesión");
      });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    loginUser
  };
};

export default useLogin;

