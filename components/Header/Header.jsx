import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar/Navbar';
import NavMenu from './Navbar/NavMenu/NavMenu';

const Header = () => {
    return (
        <div>
            <Container>
                <Navbar />
                <NavMenu />
            </Container>
        </div>
    );
};

export default Header;
