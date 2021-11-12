import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import userFacade from "./auth/userFacade";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WikipediaPage from "./pages/WikipediaPage";
import DadJokePage from "./pages/DadJokePage";
import NoMatchPage from "./pages/NoMatchPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import UserPage from "./pages/UserPage";

export default function App() {
  const navigate = useNavigate();
  const { login, logout, loggedIn, getUser } = userFacade();
  const [loggedInState, setLoggedInState] = useState(loggedIn());
  const [userState, setUserState] = useState(getUser());

  function logoutProtocol() {
    if (!loggedInState) return;
    logout();
    setLoggedInState(false);
    setUserState(null);
    navigate("/");
  }

  function loginProtocol(user, pass) {
    if (loggedInState) return;
    login(user, pass)
      .then(res => {
        setUserState(getUser())
        setLoggedInState(true);
        navigate("/");
      });
  }

  return (
    <div>
      <Header loggedIn={loggedInState} user={userState} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wikipedia" element={<WikipediaPage />} />
        <Route path="/dadjokes" element={<DadJokePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage login={loginProtocol} />} />
        <Route path="/logout" element={<LogoutPage logout={logoutProtocol} />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}
