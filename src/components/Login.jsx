import { useState } from "react";

function Login({ login }) {
    const init = { username: "", password: "" };
    const [credentials, setCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        login(credentials.username, credentials.password);
    }
    const onChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <form onChange={onChange} >
                <input placeholder="Username" id="username" />
                <input placeholder="Password" id="password" />
                <button onClick={performLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;