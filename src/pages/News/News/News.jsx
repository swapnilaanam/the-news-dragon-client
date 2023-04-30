import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {

    const news = useLoaderData();

    const { title, image_url, details, category_id } = news;

    return (
        <div className="mt-4">
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft /> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;