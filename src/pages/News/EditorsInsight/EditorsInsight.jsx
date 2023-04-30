import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import one from '../../../assets/1.png';
import two from '../../../assets/2.png';
import three from '../../../assets/3.png';
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInsight = () => {

    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={one} />
                    <Card.Body>
                        <Card.Title>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Title>
                        <Card.Text>
                            <FaRegCalendar /> Jan 4, 2022
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={two} />
                    <Card.Body>
                        <Card.Title>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Title>
                        <Card.Text>
                            <FaRegCalendar /> Jan 4, 2022
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={three} />
                    <Card.Body>
                        <Card.Title>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Title>
                        <Card.Text>
                            <FaRegCalendar /> Jan 4, 2022
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsight;