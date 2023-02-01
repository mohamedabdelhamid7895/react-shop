import React, { useState } from 'react';
import { Card, Col, Row, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import Counter from './Counter';


const Search = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Row className="">
            {/* <Counter/> */}
            <h1 className="text-danger">Our Products</h1>
            <Form.Control
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={handleChange}
            />
            {filteredProducts.length > 0 ? (
                <Row className="d-flex flex-wrap">
                    {filteredProducts.map((product) => {
                        return (
                            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="p-2">
                                <Card>
                                    <Card.Img variant="top" src={product.img_src} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Price: {product.price}</small>
                                    </Card.Footer>
                                    <Link to={`/product/${product.id}`}>
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>                
                                    </Card>
                            </Col>

                        );
                    })}
                </Row>
            ) : (
                <h2 className="text-danger text-center mt-3">No products available</h2>
            )}
        </Row>
    );
};

export default Search;