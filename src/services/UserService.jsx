import axios from "axios";

const UserUrl = "http://localhost:8080/api/users";

const UserService = {

  register (user){
    return axios.post( `${UserUrl}/register`, user);
  },
  
  login (user){
    return axios.post(`${UserUrl}/login`, user);
  }

};

export default UserService;