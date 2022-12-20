// import React from 'react'
import { React, useState, useEffect } from 'react'
import { gFetch } from '../../component/helpers/gFetch'
import ItemList from './ItemList'




const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  gFetch()
    .then((resp) => setProducts(resp))
    .catch( err => console.log(err))
    .finally( () => setLoading(false))

},[])
// console.log(products)

  return (
    <>
    {!loading && <>    
    <div className="container"><h2>{ props.greeting }</h2></div>

    <ItemList arrProd= {products} />
    </> }
    </>
  )
}

export default ItemListContainer