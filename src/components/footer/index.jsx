import React from "react";

import "./styles/styles.css";

import Card from 'react-bootstrap/Card';


function Footer() {
    return(
        <div>
            <Card className="text-center">               
                <Card.Footer className="text-muted">Creado Por Industrias I :)  </Card.Footer>
            </Card>
        </div>
    );
}

export default Footer;