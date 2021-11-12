import {
  Navigate,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NoMatchPage from "./pages/NoMatchPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import { useState } from "react";
import loginFacade from "./auth/loginFacade";

function App() {
  // I don't know how this will work with token expiration. You might just stay logged in but can't contact backend.
  const [loggedIn, setLoggedIn] = useState(loginFacade.loggedIn());
  const [user, setUser] = useState(loginFacade.getUser());
  const navigate = useNavigate();

  const logout = () => {
    loginFacade.logout()
    setLoggedIn(false);
    setUser('');
    navigate("/");
  }
  const login = (user, pass) => {
    loginFacade.login(user, pass, setUser)   // could also just send setUser
      .then(res => {
        setLoggedIn(true);
        navigate("/");
      });
  }

  return (
    <div>
      <Header loggedIn={loggedIn} user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage login={login} />} />
        <Route path="/logout" element={<LogoutPage logout={logout} />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
