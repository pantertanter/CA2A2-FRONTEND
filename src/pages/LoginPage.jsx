import { useState } from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";

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

    // the bootstrap container stuff should probably be at a higher level in the app.
    // I'm also not 100% on all the grid stuff.
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <Form className="mt-3" onChange={onChange} >
                        <FormControl className="mb-3" type="text" placeholder="Username" id="username" />
                        <FormControl className="mb-3" type="text" placeholder="Password" id="password" />
                        <Button className="mb-3" onClick={performLogin}>Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;