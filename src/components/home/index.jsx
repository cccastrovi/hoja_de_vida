import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return(
        <section>
            <Container>
                <Row>
                    <Col>
                        <h4>Algo Sobre Mi</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem suscipit sint praesentium consectetur illo temporibus corporis dicta! Iusto, dolore. Accusantium, incidunt! Magnam, accusantium veniam dolore molestiae labore aliquam. Tenetur.</p></Col>
                        <article>
                            <Col>
                                <li>lorem1</li>
                                <li>lorem2</li>
                                <li>lorem3</li>
                                <li>lorem4</li>
                                <li>lorem5</li>
                                <li>lorem6</li>
                                <li>lorem7</li>
                            </Col>
                        </article>
                </Row>
                <Row>
                    <Col>
                        <h4>Hobies</h4>
                        <li>
                            <ol>lorem1</ol>
                            <ol>lorem2</ol>
                            <ol>lorem3</ol>
                            <ol>lorem4</ol>
                        </li>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Sueños</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ex adipisci laborum! Est tenetur minus quasi dicta tempore. Quae ipsam eius vitae quasi maxime perferendis debitis corrupti facilis accusantium esse!
                        Necessitatibus odit quo illo cupiditate, temporibus eos ex voluptas. Numquam quisquam, ducimus cum libero cupiditate ullam consequatur, adipisci laborum eligendi ea voluptatibus necessitatibus deleniti atque qui quae delectus, perferendis illo?</p>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <h1>Aqui va un descripcion mia </h1>
        </section>
    )
}

export default Home;