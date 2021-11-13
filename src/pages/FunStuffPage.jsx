import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import apiFacade from "../apiFacade";

function FunStuffPage() {
    const [fun, setFun] = useState();
    const mounted = useRef(true);

    useEffect(() => {
        apiFacade.fetchFunStuff(setFun, mounted);
        return () => mounted.current = false;
    }, []);

    function FunStuff({ content }) {
        const { dadJoke, chuckJoke, singleLineJoke, breadJoke, yoMamaJoke, geekJoke, catFact, friendsQuote } = content;
        return (
            <div>
                <Row>
                    <Col>
                        <h3>Dad joke</h3>
                        <p>{dadJoke.joke}</p>
                    </Col>
                    <Col>
                        <h3>Chuck Norris joke</h3>
                        <p>{chuckJoke.value}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Random joke</h3>
                        <p>{singleLineJoke.joke}</p>
                    </Col>
                    <Col>
                        <h3>Bread pun</h3>
                        <p>{breadJoke.joke}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Yo mama joke</h3>
                        <p>{yoMamaJoke.joke}</p>
                    </Col>
                    <Col>
                        <h3>Geek joke*</h3>
                        <p>{geekJoke.joke}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Cat fact</h3>
                        <p>{catFact.text}</p>
                    </Col>
                    <Col>
                        <h3>Friends quote</h3>
                        <p>{friendsQuote.quote}</p>
                        <p><i>- {friendsQuote.character}</i></p>
                    </Col>
                </Row>
                <p><i><sub>*{geekJoke.note}</sub></i></p>
            </div>
        )
    }

    return (
        <>
            <p><i>These are fetched in parallel. This page is accessible for any role.</i></p>
            {fun
                ? <FunStuff content={fun} />
                : <p>Loading...</p>}
        </>
    );
}

export default FunStuffPage;
