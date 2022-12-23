import React, { useState } from 'react'

const ContCant = () => {
    const [contador, setContador] = useState(0)
    const sumar = ()=> {
        return setContador(contador+1) 
    }
    const restar = ()=> {
        return setContador(contador -1)
    }
    // let contador = 0
  return (
    <>
    <div className='d-flex'>
    <button className= 'ms-2 btn btn-outline-dark'onClick={sumar}> + </button>
    <div className='ms-2'>{contador}</div>
    <button className= 'ms-2 btn btn-outline-dark' onClick={restar}> - </button>
    </div>
    </>

  )
}

export default ContCant