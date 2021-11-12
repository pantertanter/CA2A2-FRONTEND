import { useEffect, useRef, useState } from "react";
import apiFacade from "../apiFacade";
import { Col, Row } from "react-bootstrap";

export default function WikipediaPage() {
    const [articles, setArticles] = useState();
    const mounted = useRef(true);

    useEffect(() => {
        apiFacade.fetchWikipedia(setArticles, mounted);
        return () => mounted.current = false;
    }, []);

    function WikipediaArticle({ article: a }) {
        const t = a.thumbnail;
        return (
            <Row className="mb-5">
                <Col>
                    <h2>{a.title}</h2>
                    <p><i>{a.description}</i></p>
                    <p>{a.extract}</p>
                    <a href={a.url} target="_blank" rel="noopener noreferrer">{a.url}</a>
                </Col>
                <Col>
                    <img alt={a.title} src={t.source} width={t.width} height={t.height} />
                </Col>
            </Row>
        )
    }

    return (
        <div>
            <p><i>These are fetched sequentially.</i></p>
            {articles && articles.map(a => <WikipediaArticle key={a.pageid} article={a} />)}
        </div>
    );
}