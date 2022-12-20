import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { gFetch } from '../../component/helpers/gFetch'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const objId = useParams() 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

      gFetch(objId)
      .then((resp) => setProducts(resp))
      .catch( err => console.log(err))
      .finally (setLoading(false));
      console.log(products)
      
},[])
  return (
    <ItemDetail 
    product = {products}/>
  )
}

export default ItemDetailContainer