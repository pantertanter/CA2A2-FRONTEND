import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default function LoginForm({ login }) {
    const [usernameValue, setUsernameValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [isLoggingIn, setIsLoggingIn] = useState();
    function submitLogin(event) {
        event.preventDefault();
        setIsLoggingIn(true);
        login(usernameValue, passwordValue);
    }

    return <Form className="loginForm mt-3 m-auto" onSubmit={submitLogin}>
        <FormControl
            onChange={e => setUsernameValue(e.target.value)}
            className="mb-3"
            type="text"
            placeholder="username"
            id="username" />

        <FormControl
            onChange={e => setPasswordValue(e.target.value)}
            className="mb-3"
            type="password"
            placeholder="password"
            id="password" />

        <Button className="d-block mx-auto" type="submit" size="lg" disabled={!usernameValue || !passwordValue || isLoggingIn}>{isLoggingIn ? '...' : 'Sign in'}</Button>
    </Form>
}