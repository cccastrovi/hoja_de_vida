import React from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from "react-bootstrap/esm/Col";




function Referencias() {
    return(
        <div>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <Form>
                                <Row className="mb-3">
                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom01">
                                        <Form.Label>Nombre y Apellidos</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre y Apellidos" defaultValue="Mark" required/>
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom02">
                                        <Form.Label>Cargo</Form.Label>
                                        <Form.Control type="text" placeholder="Cargo" defaultValue="Desarrollador" required/>
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustomUsername">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Email" aria-describedby="inputGroupPrepend" required/>
                                        </InputGroup>
                                        </Form.Group>
                                    </ListGroup.Item>
                                
                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom03">
                                        <Form.Label>Numero de Telefono</Form.Label>
                                        <Form.Control type="number" placeholder="Numero de Telefono" required />
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom04">
                                        <Form.Label>Empresa</Form.Label>
                                        <Form.Control type="text" placeholder="Empresa" required />
                                        </Form.Group>
                                    </ListGroup.Item>
                                </Row>
                            </Form>
                        </ListGroup>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <Form>
                                <Row className="mb-3">
                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom01">
                                        <Form.Label>Nombre y Apellidos</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre y Apellidos" defaultValue="Mark" required/>
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom02">
                                        <Form.Label>Cargo</Form.Label>
                                        <Form.Control type="text" placeholder="Cargo" defaultValue="Desarrollador" required/>
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustomUsername">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Email" aria-describedby="inputGroupPrepend" required/>
                                        </InputGroup>
                                        </Form.Group>
                                    </ListGroup.Item>
                                
                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom03">
                                        <Form.Label>Numero de Telefono</Form.Label>
                                        <Form.Control type="number" placeholder="Numero de Telefono" required />
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom04">
                                        <Form.Label>Empresa</Form.Label>
                                        <Form.Control type="text" placeholder="Empresa" required />
                                        </Form.Group>
                                    </ListGroup.Item>
                                </Row>
                            </Form>
                        </ListGroup>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <Form>
                                <Row className="mb-3">
                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom01">
                                        <Form.Label>Nombre y Apellidos</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre y Apellidos" defaultValue="Mark" required/>
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom02">
                                        <Form.Label>Cargo</Form.Label>
                                        <Form.Control type="text" placeholder="Cargo" defaultValue="Desarrollador" required/>
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustomUsername">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control type="text" placeholder="Email" aria-describedby="inputGroupPrepend" required/>
                                        </InputGroup>
                                        </Form.Group>
                                    </ListGroup.Item>
                                
                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom03">
                                        <Form.Label>Numero de Telefono</Form.Label>
                                        <Form.Control type="number" placeholder="Numero de Telefono" required />
                                        </Form.Group>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group controlId="validationCustom04">
                                        <Form.Label>Empresa</Form.Label>
                                        <Form.Control type="text" placeholder="Empresa" required />
                                        </Form.Group>
                                    </ListGroup.Item>
                                </Row>
                            </Form>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Referencias;