import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default function LoginForm({ login }) {
    const [username, setUsernameValue] = useState();
    const [password, setPasswordValue] = useState();

    function clickLogin(event) {
        event.preventDefault();
        login(username, password);
    }

    return <Form className="mt-3" >
        <FormControl
            onChange={e => setUsernameValue(e.target.value)}
            className="mb-3"
            type="text"
            placeholder="Username"
            id="username" />

        <FormControl
            onChange={e => setPasswordValue(e.target.value)}
            className="mb-3"
            type="text"
            placeholder="Password"
            id="password" />

        <Button className="mb-3" onClick={clickLogin}>Login</Button>
    </Form>
}