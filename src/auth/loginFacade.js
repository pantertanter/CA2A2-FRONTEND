import { SERVER_URL } from "../settings";
import handleHttpErrors from "../utils/handleHttpErrors";

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

    const login = (user, password, setUser) => {
        const options = makeOptions("POST", true, { username: user, password: password });
        return fetch(URL, options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token);
                // could just call getUser but getting the token again seems redundant when we already have it.
                const user = getUserFromPayload(getPayloadFromToken(res.token));
                setUser(user);
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

    const fetchData = () => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URL, options).then(handleHttpErrors);
    }

    // I want to move this to httpUtils, but it uses loggedIn() specifically, so I don't know what the best way to handle is.
    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        getUser,
        fetchData
    }
}
const facade = loginFacade();
export default facade;
