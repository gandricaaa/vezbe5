import axios from "axios";
class UserService {
    static getAllUsers = () => axios.get('/users')
}
export default UserService