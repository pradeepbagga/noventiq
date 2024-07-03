import React from 'react';
import './Styles/LayoutSignin.scss';
import { Container } from 'react-bootstrap';

const LayoutSignin = ({ children }) => {
    return (
        <Container className='signin-layout'>
            <div className='content'>{children}</div>
        </Container>
    )
}

export default React.memo(LayoutSignin);