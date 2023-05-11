import React from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Headerhoja() {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>HOJA DE VIDA</Card.Header>
                <Card.Body>
                    <Card.Title>NUNCA DE RINDAS POR MAS DURA QUE SEA LA PRUEBA</Card.Title>
                    <Card.Text>
                        LAS COSAS BUENAS NUNCA SON FACILES.
                    </Card.Text>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJaa44hakF5skS3g1dAqjMEuMAR6MgAetFw&usqp=CAU" />
                    </Card>
                </Card.Body>
                <Card.Footer className="text-muted">
                
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Estudios</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Experiencias Laborales</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled"> Referencias</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Headerhoja;