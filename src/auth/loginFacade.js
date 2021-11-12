import { SERVER_URL } from "../settings";
import handleHttpErrors from "../utils/handleHttpErrors";

function loginFacade() {
    const URL = `${SERVER_URL}/api/login`

    const setToken = (token) => {
        if (!token) logout();
        else localStorage.setItem('jwtToken', token);
    }

    const getToken = () => {
        const token = localStorage.getItem('jwtToken');
        if (!token) return null;
        const { exp } = getPayloadFromToken(token);
        if (exp * 1000 > Date.now()) {
            console.log("Token expires in ", Math.round((exp * 1000 - Date.now()) / 1000 / 60), " min");
            return token;
        } else {
            console.log("Token expired!");
            setToken(null);
            return null;
        }
    }
    const loggedIn = () => {
        return !!getToken();
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
