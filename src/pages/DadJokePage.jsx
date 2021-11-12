import { useEffect, useRef, useState } from "react";
import apiFacade from "../apiFacade";

function DadJokePage() {
    const [jokes, setJokes] = useState();
    const mounted = useRef(true);

    useEffect(() => {
        apiFacade.fetchDadJokes(setJokes, mounted);
        return () => mounted.current = false;
    }, []);

    function DadJoke({ joke: j }) {
        return (
            <p>{j.joke}</p>
        )
    }

    return (
        <>
            <p><i>These are fetched in parallel.</i></p>
            {jokes && jokes.map(j => <DadJoke key={j.id} joke={j} />)}
        </>
    );
}

export default DadJokePage;