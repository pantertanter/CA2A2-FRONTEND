import { SERVER_URL } from "./settings";
import fetchData from "./utils/fetchData";

function fetchWikipedia(setArticles) {
    fetchData(`${SERVER_URL}/api/info/sequential`, "GET", setArticles);
}

const apiFacade = {
    fetchWikipedia
}

export default apiFacade;
