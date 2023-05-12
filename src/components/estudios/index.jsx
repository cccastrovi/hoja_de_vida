import React from "react";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function Estudios() {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Primaria</Card.Title>
                    <Card.Text>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Nombre de la Institucion</Form.Label>
                        <Form.Control type="text"/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Fecha Inicio</Form.Label>
                        <Form.Control type="date"/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Fecha Terminacion</Form.Label>
                        <Form.Control type="date"/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Form.Group className="mb-3">
                            <Form.Label>Ciudad Donde Termino</Form.Label>
                            <Form.Select>
                                <option>Manizales</option>
                                <option>Bogota</option>
                                <option>Cali</option>
                                <option>Pereira</option>
                                <option>Cartagena</option>
                                <option>Tolima</option>
                            </Form.Select>
                        </Form.Group>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Privado</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Secundaria</Card.Title>
                    <Card.Text>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Nombre de la Institucion</Form.Label>
                        <Form.Control type="text"/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Fecha Inicio</Form.Label>
                        <Form.Control type="date"/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Fecha Terminacion</Form.Label>
                        <Form.Control type="date"/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Form.Group className="mb-3">
                            <Form.Label>Ciudad Donde Termino</Form.Label>
                            <Form.Select>
                                <option>Manizales</option>
                                <option>Bogota</option>
                                <option>Cali</option>
                                <option>Pereira</option>
                                <option>Cartagena</option>
                                <option>Tolima</option>
                            </Form.Select>
                        </Form.Group>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">profundización en .....</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Universidad</Card.Title>
                    <Card.Text>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Nombre de la Institucion</Form.Label>
                        <Form.Control type="text"/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Fecha Inicio</Form.Label>
                        <Form.Control type="date"/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        <Form.Label htmlFor="">Fecha Terminacion</Form.Label>
                        <Form.Control type="date"/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Form.Group className="mb-3">
                            <Form.Label>Ciudad Donde Termino</Form.Label>
                            <Form.Select>
                                <option>Manizales</option>
                                <option>Bogota</option>
                                <option>Cali</option>
                                <option>Pereira</option>
                                <option>Cartagena</option>
                                <option>Tolima</option>
                                <option>Canada</option>
                                <option>España</option>
                                <option>Inglaterra</option>
                            </Form.Select>
                        </Form.Group>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Especialicacion en .....</small>
                    </Card.Footer>
                </Card>

            </CardGroup>
        </div>
    )
}

export default Estudios;