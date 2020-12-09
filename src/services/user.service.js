import { usersRef } from "../App";

const createUser = async (userId, userInfo) => {
    return usersRef
        .doc(userId)
        .set(userInfo)
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
};

export { createUser };
