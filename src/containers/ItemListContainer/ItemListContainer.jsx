// import React from 'react'
import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../component/helpers/gFetch'
import ItemList from './ItemList'




const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {catId} = useParams()

useEffect(() => {
  gFetch()
    .then((resp) => {
      if(catId){
        setProducts(resp.filter(item => item.categoria === catId))
      }else{
        setProducts(resp)

      }
    })
    .catch( err => console.log(err))
    .finally( () => setLoading(false))

},[catId])
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