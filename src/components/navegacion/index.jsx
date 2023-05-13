import React from "react";

import "./styles/styles.css";

import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Navegacion() {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>HOJA DE VIDA</Card.Header>
                <Card.Body>
                    <Card.Title className="Card__title-style">NUNCA DE RINDAS POR MAS DURA QUE SEA LA PRUEBA</Card.Title>
                    <Card.Text className="Card__text-style">
                        LAS COSAS BUENAS NUNCA SON FACILES.
                    </Card.Text>

                    <Card style={{ width: '14rem' }} className="Card-style">
                        <Card.Img  variant="top" className="Card__CardImg-style" src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" />
                    </Card>
                </Card.Body>
                <Card.Footer className="text-muted">
                
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <NavLink className="Nav_Link" to="/home">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="Nav_Link" to="/estudios">Estudios</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="Nav_Link" to="/experiencias">Experiencias Laborales</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="Nav_Link" to="/referencias"> Referencias</NavLink>
                        </Nav.Item>
                    </Nav>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Navegacion;