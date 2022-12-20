import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <Link to={`/detail/${product.id}`}>
      <div className='col-md-2' style={{marginLeft: 100}} >
    <Card style={{ width: '18rem' }} className='card w-100 mt-5'>
      <Card.Img variant="top" src={product.foto} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.categoria}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
    </Link>
  )
}

export default Item