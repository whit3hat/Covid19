import React from 'react';
import StateStats from '../components/Card';
import Nav from '../components/Nav';
import {Container, Row, Col } from 'reactstrap';

function Home() {
    return (
        <div>
            <Nav />
            <Container className='themed-container'>
            <StateStats />
           </Container>
        </div>
    );

}

export default Home;