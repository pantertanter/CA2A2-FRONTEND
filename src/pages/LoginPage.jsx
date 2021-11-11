import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap";

export default function LoginPage({ login }) {
    return (
        <Container fluid="sm">
            <LoginForm login={login} />
        </Container>
    );
}