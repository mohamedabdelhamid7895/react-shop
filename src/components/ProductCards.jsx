import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class ProductCards extends Component {
  
  render() {
    const { product } = this.props;
    return (
      <>
    <Card className='col-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img_src} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         {product.description}
        </Card.Text>
        <Card.Text>
        price: {product.price}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    {/*<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/582/443/760/white-design-room-sofa-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/962/636/963/design-sofa-chairs-modern-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/878/845/208/sofa-skyscraper-interior-skyscraper-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/702/145/159/living-room-sofa-table-chairs-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/573/233/300/room-interior-wooden-surface-carpets-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/315/696/891/purple-interior-interior-design-3d-design-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
</>
    )
  }
}
