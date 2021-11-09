import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useRouteMatch,
  NavLink
} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
