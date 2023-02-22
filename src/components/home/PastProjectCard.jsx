import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import Button from 'react-bootstrap/Button'

const PastProjectCard = ({value, urlIndex}) => {
    const {
        title,
        image,
        description,
      } = value;
    return(
        <Col md={4}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
                    <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
                    <Button variant="primary" href={`pastProjects/${urlIndex}`} >Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};



export default PastProjectCard