import { NavLink } from "react-router-dom";

export default function NavBar({ loggedIn, user }) {

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
                to="/dadjokes">Dad jokes</NavLink></li>
            <li><NavLink
                className={isActive}
                to="/funstuff">Fun stuff!</NavLink></li>
            {loggedIn && user.roles.includes("user") &&
                <li><NavLink
                    className={isActive}
                    to="/user">user page</NavLink></li>}
            {loggedIn && user.roles.includes("admin") &&
                <li><NavLink
                    className={isActive}
                    to="/admin">admin page</NavLink></li>}
            <li><NavLink
                className={isActive}
                to="/about">About</NavLink></li>
            <div className="header_right">
                {loggedIn
                    ? <div>
                        <li><span className="userInfo">{user.username}</span> <span className="badge bg-primary rounded-pill">{user.roles.join(", ")}</span></li>   {/* It's only a span to avoid bootstrap's <p> styling messing up the header */}
                        <li><NavLink to="/logout">Sign out</NavLink></li>
                    </div>
                    : <li><NavLink className={isActive} to="/login">Sign in</NavLink></li>
                }
            </div>
        </ul>
    );
}
