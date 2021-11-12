import loginFacade from "../auth/loginFacade";

export default function makeOptions(method, addToken, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            'Accept': 'application/json',
        }
    }
    if (addToken && loginFacade.loggedIn()) {
        opts.headers["x-access-token"] = loginFacade.getToken();
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}
