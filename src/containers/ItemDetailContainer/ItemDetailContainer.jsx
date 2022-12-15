import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { gFetch } from '../../component/helpers/gFetch'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])

useEffect(() => {
  gFetch()
    .then((resp) => setProducts(resp))
    .catch( err => console.log(err))

},[])
  return (
    <ItemDetail 
    product = {products}/>
  )
}

export default ItemDetailContainer