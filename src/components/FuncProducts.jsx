import { Card, Col, Row ,Button} from 'react-bootstrap';

const FuncProducts = ({ products }) => {
  return (
    <Row className='bg-success'>
      <h1 className='text-danger'>Our Products</h1>
      {products.map((product) => {
        return (
          <Col  key={product.id} xs={4}>
            <Card>
              <Card.Img variant="top" src={product.img_src} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Price: {product.price}</small>
              </Card.Footer>
             <Button variant="primary">Buy Now</Button>

            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
export default FuncProducts;