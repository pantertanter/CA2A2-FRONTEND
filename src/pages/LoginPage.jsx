import { useState } from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";

function Login({ login }) {
    const [username, setUsernameValue] = useState();
    const [password, setPasswordValue] = useState();

    const clickLogin = (evt) => {
        evt.preventDefault();
        login(username, password);
    }

    // the bootstrap container stuff should probably be at a higher level in the app.
    // I'm also not 100% on all the grid stuff.
    return (
        <div className="container-lg">
            <Row>
                <Col sm={6}>
                    <Form className="mt-3" >
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
                </Col>
            </Row>
        </div>
    );
}

export default Login;