import { SERVER_URL } from "./settings";
import fetchData from "./utils/fetchData";

function fetchWikipedia(setArticles, mounted) {
    fetchData(`${SERVER_URL}/api/info/sequential`, "GET", setArticles, mounted);
}

function fetchDadJokes(setJokes, mounted) {
    fetchData(`${SERVER_URL}/api/info/parallel`, "GET", setJokes, mounted);
}

function fetchUserPage(setContent, mounted) {
    fetchData(`${SERVER_URL}/api/info/user`, "GET", setContent, mounted, true);
}

const apiFacade = {
    fetchWikipedia,
    fetchDadJokes,
    fetchUserPage
}

export default apiFacade;
