import React, { Component } from 'react';
import { Col,Row ,Container} from 'react-bootstrap';
import ProductCards from './ProductCards'

class Product extends Component {
    render() {
              const products=[
{
"id": 1,
"title": "Apple iPhone 11",
"description": "The latest iPhone with a dual-camera system, A13 Bionic chip, and Face ID technology.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUAlxwbG_x5OjcjEOKhs_70iID1LTUYIMEw&usqp=CAU",
"price": 799,
"quantity": 10
},
{
"id": 2,
"title": "Samsung Galaxy S20",
"description": "A high-end smartphone with a triple-camera system, 5G capabilities, and a large AMOLED display.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN341zuiU3UQtIVT-S98tVQQcW46dUfFYSQmg40JioXzs50AXeaRrd12DsAfYSvs0uKnE&usqp=CAU",
"price": 999,
"quantity": 8
},
{
"id": 3,
"title": "Google Pixel 4",
"description": "A flagship smartphone with a dual-camera system, Google Assistant integration, and a 90Hz display.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLC3tK9fN06J0As3XhgiQo27uTmtHBADiOXlIZw9cqLXc8QANkWPI6SylEaeRpgp0lL8Y&usqp=CAU",
"price": 799,
"quantity": 5
},
{
"id": 4,
"title": "OnePlus 7 Pro",
"description": "A premium smartphone with a triple-camera system, fast charging capabilities, and a 90Hz display.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqhAvFRfuoaGORFjFSGY4TC0WtPVLV3yQPnMySCQi1dy2Tk_lN46HXZo4phk-tIMHghg&usqp=CAU",
"price": 699,
"quantity": 12
},
{
"id": 5,
"title": "LG V60 ThinQ",
"description": "A high-end smartphone with a dual-screen design, 5G capabilities, and a triple-camera system.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Kyz3hlwtPKtDP--Y-8WbBn03ZEXnOuQsdA&usqp=CAU",
"price": 899,
"quantity": 7
},{
"id": 6,
"title": "Sony Xperia 1 II",
"description": "A high-end smartphone with a triple-camera system, 5G capabilities, and a 4K OLED display.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1E6-lhWNp7Coh7A9ZZyHXZcSnSRyTRCoxQ&usqp=CAU",
"price": 1199,
"quantity": 10
},
{
"id": 7,
"title": "Huawei P40 Pro",
"description": "A flagship smartphone with a quad-camera system, 5G capabilities, and a large OLED display.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgAfkGvfplNBTl1KjijvLLG3ETBZ1LkS6CUNFzMrQmiIkuSUXX7O7RnqLtGsIYRRkMaE&usqp=CAU",
"price": 899,
"quantity": 15
},
{
"id": 8,
"title": "Nokia 9 PureView",
"description": "A premium smartphone with a penta-camera system, fast charging capabilities, and a QHD+ display.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvz3_m-IksHh3g4zhtFd9k1TbVJBgwaZSxFA&usqp=CAU",
"price": 799,
"quantity": 20
},
{
"id": 9,
"title": "Motorola Moto G Power",
"description": "A budget-friendly smartphone with a triple-camera system, long battery life, and a large HD+ display.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnF2wPvmLmggDC-mSXKuO48NUhSR-OhS_wQ&usqp=CAU",
"price": 199,
"quantity": 25
},
{
"id": 10,
"title": "Oppo Find X2 Pro",
"description": "A high-end smartphone with a triple-camera system, 5G capabilities, and a 120Hz AMOLED display.",
"img_src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dJIIh4XIsuf5w6vMttEablIaUhBamS0koQ&usqp=CAU",
"price": 1299,
"quantity": 15
}
]

        return (
 <Container className='bg-success'>
                <Row>
                    <Col>
                        <h1 className='text-danger'>Our Products</h1>
                    </Col>
                </Row>
                <Row>
                    {products.map((product, index) => {
                        return (
                            <Col xs={4} key={product.id}>
                                <ProductCards product={product} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

export default Product;