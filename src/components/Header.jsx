import { NavLink } from "react-router-dom";

function Header({ loggedIn, logout }) {
    return (
        <ul className="header">
            <li><NavLink activeClassName="active" to="/" end>Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/page1">Page 1</NavLink></li>
            <li><NavLink activeClassName="active" to="/page2">Page 2</NavLink></li>
            <li><NavLink activeClassName="active" to="/page3">Page 3</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
            <li className="header_right">
                {loggedIn
                    ? <NavLink activeClassName="active" to="/logout">Sign out</NavLink>
                    : <NavLink activeClassName="active" to="/login">Sign in</NavLink>
                }
            </li>
        </ul>
    );
}

export default Header;

/* Could be two separate lists in two components, and the Header contains both. */
