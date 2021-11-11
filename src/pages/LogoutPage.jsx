import { useEffect } from "react";

function Logout({ logout }) {
    useEffect(logout, []);

    return null;
}

export default Logout;