export default function tokenUtil() {
    function setToken(token) {
        if (!token) localStorage.removeItem("jwtToken");
        else localStorage.setItem('jwtToken', token);
    }

    function getToken() {
        const token = localStorage.getItem('jwtToken');
        if (!token) return null;
        const { exp } = getPayloadFromToken(token);
        if (exp * 1000 <= Date.now()) {
            console.log("Token expired!");
            setToken(null);
            return null;
        } else {
            console.log("Token expires in ", Math.round((exp * 1000 - Date.now()) / 1000 / 60), " min");
            return token;
        }
    }

    function getPayloadFromToken(token) {
        const encodedPayload = token.split('.')[1];
        return JSON.parse(Buffer.from(encodedPayload, 'base64'));
    }

    function getUserFromToken() {
        const token = getToken();
        if (!token) return null;
        const { username, roles } = getPayloadFromToken(token);
        const rolesArray = roles.split(",");
        return { username: username, roles: rolesArray };
    }

    return { getToken, setToken, getUserFromToken }
}