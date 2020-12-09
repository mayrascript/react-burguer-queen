import { auth } from "../App";
import { createUser } from "./user.service";

const register = async (email, password, role) => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    const { uid } = user;
    return createUser(uid, { email, role });
};

const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

const logout = () => {
    return auth.signOut();
};

const currentUser = () => {
    return auth.currentUser;
};

export { register, login, logout, currentUser };
