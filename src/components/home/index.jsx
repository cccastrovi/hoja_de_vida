import React from "react";

import "./styles/styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function Home() {
    return(
        <section>
            <Accordion defaultActiveKey="0" className="Accordion-style">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="Accordion__header-style">Algo Sobre Mi</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" >
                    <Accordion.Header className="Accordion__header-style">Sueños</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Container>

            <Form>
                <Row className="form__row--style">
                    <Form.Label htmlFor="basic-url"><strong>HOBBIES</strong></Form.Label>
                        <div className="mb-3">
                            <Form.Check inline label="hobbies 1" name="group1" />
                            <Form.Check inline label="hobbies 2" name="group1" />
                            <Form.Check inline label="hobbies 3" name="group1" />
                            <Form.Check inline label="hobbies 4" name="group1" />
                            <Form.Check inline label="hobbies 5" name="group1" />
                            <Form.Check inline label="hobbies 6" name="group1" />
                        </div>
                </Row>

                <Row className="form__row--style2">
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="basic-url"><strong>GENERO</strong></Form.Label>
                            <Col>
                                <Form.Check type="radio" label="Masculino" name="grupo1"/>
                                <Form.Check type="radio" label="Femenino"  name="grupo1"/>
                            </Col>
                        </Form.Group>
                    </fieldset>
                </Row>

                <Row>
                    <Form.Label column lg={2}>Nombre</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Pepito" />
                    </Col>
                    <br />
                    <Form.Label column lg={2}>Apellido</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Lopez" />
                    </Col>
                    <br />
                    <Form.Label column lg={2}>Telefono</Form.Label>
                    <Col>
                        <Form.Control type="number" placeholder="8888888" />
                    </Col>
                    <br />
                    <Form.Label column lg={2}>Correo</Form.Label>
                    <Col>
                        <Form.Control type="email" placeholder="pepito@micorreo.com" />
                    </Col>
                </Row>
                





            </Form>
                
                <Row>
                <Col>
                    <li>lorem1</li>
                    <li>lorem2</li>
                    <li>lorem3</li>
                    <li>lorem4</li>
                    <li>lorem5</li>
                    <li>lorem6</li>
                    <li>lorem7</li>
                </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <h1>Aqui va un descripcion mia </h1>
        </section>
    )
}

export default Home;