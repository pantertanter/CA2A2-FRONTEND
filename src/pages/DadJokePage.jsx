import { useEffect, useState } from "react";
import apiFacade from "../apiFacade";

function DadJokePage() {
    const [jokes, setJokes] = useState();

    useEffect(() => {
        apiFacade.fetchDadJokes(setJokes);
    }, []);

    function DadJoke({ joke: j }) {
        return (
            <p>{j.joke}</p>
        )
    }

    return (
        <div>
            <p><i>These are fetched in parallel.</i></p>
            {jokes && jokes.map(j => <DadJoke key={j.id} joke={j} />)}
        </div>
    );
}

export default DadJokePage;