import tokenUtil from "../auth/tokenUtil";

export default function makeOptions(method, addToken, body) {
    const { getToken, loggedIn } = tokenUtil();
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            'Accept': 'application/json',
        }
    }
    if (addToken && loggedIn()) opts.headers["x-access-token"] = getToken();
    if (body) opts.body = JSON.stringify(body);

    return opts;
}
