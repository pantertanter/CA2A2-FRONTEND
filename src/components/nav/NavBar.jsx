
import NavItem from "./NavItem";
import PrivateNavItem from "./PrivateNavItem";
import LoginNavItems from "./LoginNavItems";

export default function NavBar({ loggedIn, user }) {

    return (
        <ul className="navBar">
            <NavItem to="/" text="Home" />
            <NavItem to="/wikipedia" text="Wikipedia" />
            <NavItem to="/dadjokes" text="Dad jokes" />
            <PrivateNavItem to="/funstuff" text="Fun stuff!" allowedRole="any" user={user} />
            <PrivateNavItem to="/user" text="user page" allowedRole="user" user={user} />
            <PrivateNavItem to="admin" text="admin page" allowedRole="admin" user={user} />
            <NavItem to="/about" text="About" />
            <LoginNavItems user={user} loggedIn={loggedIn} />
        </ul>
    );
}
