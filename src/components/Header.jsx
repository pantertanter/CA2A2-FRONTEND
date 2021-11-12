import { NavLink } from "react-router-dom";

function Header({ loggedIn, user }) {
    function isActive({ isActive }) {
        return isActive ? "active" : "";
    }

    return (
        <ul className="header">
            <li><NavLink
                className={isActive}
                to="/" end>Home</NavLink></li>
            <li><NavLink
                className={isActive}
                to="/wikipedia">Wikipedia</NavLink></li>
            <li><NavLink
                className={isActive}
                to="/about">About</NavLink></li>
            <div className="header_right">
                {loggedIn
                    ? <div>
                        <li><span>Hello, {user.username}! Roles: {user.roles.join(", ")}</span></li>   {/* It's only a span to avoid bootstrap's <p> styling messing up the header */}
                        <li><NavLink to="/logout">Sign out</NavLink></li>
                    </div>
                    : <li><NavLink className={isActive} to="/login">Sign in</NavLink></li>
                }
            </div>
        </ul>
    );
}

export default Header;

/* Could be two separate lists in two components, and the Header contains both. */
