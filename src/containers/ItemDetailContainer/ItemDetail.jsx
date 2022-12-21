import React from 'react'

const ItemDetail = ({product}) => {
  console.log(product)
  return (
    <div>
      <div className="card" style={{width: 288}}>
    <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.categoria}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default ItemDetail