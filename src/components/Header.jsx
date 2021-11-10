import { NavLink } from "react-router-dom";

function Header({ loggedIn, user }) {
    return (
        <ul className="header">
            <li><NavLink activeClassName="active" to="/" end>Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/page1">Page 1</NavLink></li>
            <li><NavLink activeClassName="active" to="/page2">Page 2</NavLink></li>
            <li><NavLink activeClassName="active" to="/page3">Page 3</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
            <div className="header_right">
                {loggedIn
                    ? <div>
                        <li><span>Hello, {user.username}!</span></li>   {/* It's only a span to avoid bootstrap's <p> styling messing up the header */}
                        <li><NavLink activeClassName="active" to="/logout">Sign out</NavLink></li>
                    </div>
                    : <li><NavLink activeClassName="active" to="/login">Sign in</NavLink></li>
                }
            </div>
        </ul>
    );
}

export default Header;

/* Could be two separate lists in two components, and the Header contains both. */
