import handleHttpErrors from "../utils/handleHttpErrors";
import makeOptions from "../utils/makeOptions";

function fetchData(url, method, callback, addToken, body) {
    const options = makeOptions(method, addToken, body); // boolean addToken add's the logged in user token
    return fetch(url, options).then(handleHttpErrors).then(callback);
}

export default fetchData;
