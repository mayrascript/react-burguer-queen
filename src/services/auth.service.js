import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (email, password) => {
    console.log('register', {email, password})
    return true;
}

const login = (email, password) => {
    return true;
}

const logout = () => {
    return true;
}

export default {
    register,
    login,
    logout,
};
