import LoginForm from "../components/LoginForm";

export default function LoginPage({ login }) {
    return (
        <>
            <h2 align="center">Sign in</h2>
            <LoginForm login={login} />
        </>);
}