import { SERVER_URL } from "../settings";
import handleHttpErrors from "../utils/handleHttpErrors";
import makeOptions from "../utils/makeOptions";

function loginFacade() {
    const URL = `${SERVER_URL}/api/login`

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    const loggedIn = () => {
        return getToken() != null;
    }
    const logout = () => {
        localStorage.removeItem("jwtToken");
    }
    const getUser = () => {
        const token = getToken();
        // could define the init user somewhere.
        return token ? getUserFromPayload(getPayloadFromToken(token)) : { username: "", roles: [] };
    }

    const login = (user, password) => {
        const options = makeOptions("POST", true, { username: user, password: password });
        return fetch(URL, options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token);
            });
    }

    // could combine getUser and getPayload.
    function getPayloadFromToken(token) {
        const encodedPayload = token.split('.')[1];
        return JSON.parse(Buffer.from(encodedPayload, 'base64'));
    }

    function getUserFromPayload(payload) {
        const { username, roles } = payload;
        const rolesArray = roles.split(",");
        return { username: username, roles: rolesArray };
    }

    return {
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        getUser,
    }
}
const facade = loginFacade();
export default facade;
