import React from 'react';
import StateStats from '../components/Card';
import Nav from '../components/Nav';
import {Container, Row, Col } from 'reactstrap';

function Home() {
    return (
        <div>
            <Container>
                <Nav />
                <Row>
                    <Col xs='12' sm='12' lg='4'> 
                      <StateStats />
                      </Col>
                      <Col xs='12' sm='12' lg='4'> 
                      <StateStats />
                      </Col>
                      <Col xs='12' sm='12' lg='4'> 
                      <StateStats />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Home;