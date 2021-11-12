import { SERVER_URL } from "./settings";
import fetchData from "./utils/fetchData";

function fetchWikipedia(setArticles, mounted) {
    fetchData(`${SERVER_URL}/api/info/sequential`, "GET", setArticles, mounted);
}

function fetchDadJokes(setJokes, mounted) {
    fetchData(`${SERVER_URL}/api/info/parallel`, "GET", setJokes, mounted);
}

const apiFacade = {
    fetchWikipedia,
    fetchDadJokes
}

export default apiFacade;
