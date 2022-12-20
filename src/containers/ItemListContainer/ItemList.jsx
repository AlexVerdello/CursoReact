import React from 'react'
import Item from './Item'

const ItemList = ({arrProd}) => {
  return (
    arrProd.map(product => <Item product={product} />)
  )
}

export default ItemList