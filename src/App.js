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

function App() {
  const { login, logout, loggedIn, getUser } = userFacade();
  // I don't know how this will work with token expiration. You might just stay logged in but can't contact backend.
  const [loggedInState, setLoggedInState] = useState(loggedIn());
  const [userState, setUserState] = useState(getUser());
  const navigate = useNavigate();

  function logoutProtocol() {
    logout();
    setLoggedInState(false);
    setUserState(null);
    navigate("/");
  }

  function loginProtocol(user, pass) {
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage login={loginProtocol} />} />
        <Route path="/logout" element={<LogoutPage logout={logoutProtocol} />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
