import { SERVER_URL } from "./settings";
import fetchData from "./utils/fetchData";

function fetchWikipedia(setArticles) {
    fetchData(`${SERVER_URL}/api/info/sequential`, "GET", setArticles);
}

function fetchDadJokes(setJokes) {
    fetchData(`${SERVER_URL}/api/info/parallel`, "GET", setJokes);
}

const apiFacade = {
    fetchWikipedia,
    fetchDadJokes
}

export default apiFacade;
