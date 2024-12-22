import React from "react";
// import axios from "axios";
import logo from "../img/hhl.png"
import HamburgerClosed from "./hamburgerClosed";

import { Container, Row, Col } from 'reactstrap';

function Menu() {
    return (
        <header  className="App-header">
            <Container>
                <Row>
                    <Col>
                        <HamburgerClosed/>
                    </Col>
                    <Col>
                        <a rel="noopener noreferrer" alt="logo" href="https://nc.harrisonhomelabs.cloud" target="_blank"><img className="App-logo" src={logo} alt="HarrisonHomeLabs Logo"/></a>
                    </Col>
                    <Col>
                        <a className="App-link" href="https://search.harrisonhomelabs.cloud">
                            HarrisonHomeLabs
                        </a>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Menu
