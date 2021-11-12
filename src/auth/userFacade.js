import { SERVER_URL } from "../settings";
import handleHttpErrors from "../utils/handleHttpErrors";
import makeOptions from "../utils/makeOptions";
import tokenUtil from "./tokenUtil";

export default function userFacade() {
    const URL = `${SERVER_URL}/api/login`
    const { getToken, setToken, getUserFromToken } = tokenUtil();

    function login(user, pass) {
        const options = makeOptions("POST", false, { username: user, password: pass });
        return fetch(URL, options)
            .then(handleHttpErrors)
            .then(res => { setToken(res.token); });
    }

    function logout() {
        setToken(null);
    }

    function loggedIn() {
        return !!getToken();
    }

    function getUser() {
        return loggedIn ? getUserFromToken() : null;
    }

    return {
        loggedIn,
        login,
        logout,
        getUser,
    }
}
