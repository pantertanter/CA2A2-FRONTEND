import { useEffect, useState } from "react";
import apiFacade from "../apiFacade";
import { Col, Row } from "react-bootstrap";

function WikipediaPage() {
    const [articles, setArticles] = useState();

    useEffect(() => {
        apiFacade.fetchWikipedia(setArticles);
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
                    <img src={t.source} width={t.width} height={t.height} />
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

export default WikipediaPage;