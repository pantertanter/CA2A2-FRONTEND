import tokenUtil from "../auth/tokenUtil";

export default function makeOptions(method, addToken, body) {
    const { getToken } = tokenUtil();
    const token = getToken();   // not null when logged in
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            'Accept': 'application/json',
        }
    }
    if (addToken && token) opts.headers["x-access-token"] = token;
    if (body) opts.body = JSON.stringify(body);

    return opts;
}
