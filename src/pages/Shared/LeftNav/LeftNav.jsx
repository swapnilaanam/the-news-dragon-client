import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import one from '../../../assets/1.png';
import two from '../../../assets/2.png';
import three from '../../../assets/3.png';
import { FaRegCalendar } from 'react-icons/fa';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="mt-4">
            <h4>Categories</h4>
            <div className="ps-4">
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-black">
                            {category.name}
                        </Link>
                    </p>)
                }
            </div>
            <Row xs={1} className="g-4 mt-4">
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
        </div>
    );
};

export default LeftNav;