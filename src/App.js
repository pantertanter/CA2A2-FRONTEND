import {
  Navigate,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useState } from "react";
import loginFacade from "./loginFacade";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const initUser = { username: "" };
  const [user, setUser] = useState(initUser);
  const navigate = useNavigate();

  const logout = () => {
    loginFacade.logout()
    setLoggedIn(false);
    setUser(initUser);
    navigate("/");
  }
  const login = (user, pass) => {
    loginFacade.login(user, pass, (data) => setUser({ username: data.username }))
      .then(res => {
        setLoggedIn(true);
        navigate("/");
      });
  }

  return (
    <div>
      <Header loggedIn={loggedIn} user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/page3/*" element={<Page3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/logout" element={<Logout logout={logout} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
