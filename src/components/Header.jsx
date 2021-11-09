import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <ul className="header">
            <li><NavLink activeClassName="active" to="/" end>Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/page1">Page 1</NavLink></li>
            <li><NavLink activeClassName="active" to="/page2">Page 2</NavLink></li>
            <li><NavLink activeClassName="active" to="/page3">Page 3</NavLink></li>
            <li><NavLink activeClassName="active" to="/page4">Page 4</NavLink></li>
            <li className="header_right"><NavLink activeClassName="active" to="/login">Sign in</NavLink></li>
        </ul>
    );
}

/* Could be two separate lists in two components, and the Header contains both. */
