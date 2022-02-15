import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../../../../images/banner-bg.png'

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#D8E8EB', padding: '40px 0' }}>
            <Container>
                <Row className="g-2">
                    <Col className="d-flex  align-items-center" md={6}>
                        <div>
                            <h2>Health is the root of all happiness. Stay healthy and take good medicine!</h2>
                            <p>Medicine is the secret to your well-being. There is no substitute for good medicine to stay well...:)</p>
                            <Link className="btn btn-dark" to="/explore">
                                Explore Medicine
                            </Link>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid rounded-2" src={bg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;