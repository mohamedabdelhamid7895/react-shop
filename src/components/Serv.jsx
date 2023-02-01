import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import Footer from './Footer';

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [img_src, setImageSrc] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        setProducts(data);
    };

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handlePriceChange = e => {
        setPrice(e.target.value);
    };

    const handleDescriptionChange = e => {
        setDescription(e.target.value);
    };

    const handleImageSrcChange = e => {
        setImageSrc(e.target.value);
    };

    const handleCreateProduct = async e => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description,
            img_src
        };
        const res = await fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json();
        setProducts([...products, data]);
        setTitle('');
        setPrice('');
        setDescription('');
        setImageSrc('');
    };

    const handleUpdateProduct = async () => {
        const updatedProduct = {
            title,
            price,
            description,
            img_src
        };
        const res = await fetch(
            `http://localhost:3001/products/${editingId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            }
        );
        const data = await res.json();
        setProducts(
            products.map(product => (product.id === editingId ? data : product))
        );
        setTitle('');
        setPrice('');
        setDescription('');
        setImageSrc('');
        setIsEditing(false);
    };

    const handleDeleteProduct = async id => {
        await fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE'
        });
        setProducts(products.filter(product => product.id !== id));
    };
    const handleEditProduct = product => {
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
        setImageSrc(product.img_src);
        setIsEditing(true);
        setEditingId(product.id);
    };

    return (
        <div className="mt-5">
            <h2 className="text-center mb-5">Products Store</h2>
            <Form onSubmit={isEditing ? handleUpdateProduct : handleCreateProduct} className='bg-success text-bold text-light'>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        className="d-flex mx-auto w-75"

                        value={title}
                        onChange={handleTitleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="">Price</Form.Label>
                    <Form.Control
                        type="text"
                        value={price}
                        className="d-flex mx-auto w-75"
                        onChange={handlePriceChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        className="d-flex mx-auto w-75"

                        type="text"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image Src</Form.Label>
                    <Form.Control
                        className="d-flex mx-auto w-75"
                        type="text"
                        value={img_src}
                        onChange={handleImageSrcChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="d-flex mx-auto mt-2  w-25"
>
                    {isEditing ? 'Update' : 'Create'}
                </Button>
            </Form>
            <div className="d-flex flex-wrap mt-5 justify-content-center bg-dark">
                {products.map(product => (
                    <Card key={product.id} className="mr-3 mb-3 mx-2 d-flex d-lg-inline-flex  d-md-inline-flex justify-content-center align-items-center" style={{ maxWidth: '18rem' }}>
                        <Card.Img variant="top" src={product.img_src} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}</Card.Text>
                            <Button
                                variant="primary"
                                className="mr-2 mx-3"
                                onClick={() => handleEditProduct(product)}
                            >
                                Edit
                            </Button>
                            <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
<Footer/>
        </div>
    );
};

export default ProductManager;
