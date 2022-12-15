
let productos = [
    {id: '1', name: 'ALMOHADA 1', categoria: 'Almohadas', stock: '100', precio: '3000', foto:''},
    {id: '2', name: 'ALMOHADA 2', categoria: 'Almohadas', stock: '100', precio: '3200', foto:''},
    {id: '3', name: 'COLCHON 1', categoria: 'Colchones', stock: '100', precio: '13000', foto:''},
    {id: '4', name: 'COLCHON 2', categoria: 'Colchones', stock: '100', precio: '31000', foto:''},
    {id: '5', name: 'COLCHON 3', categoria: 'Colchones', stock: '100', precio: '23000', foto:''}
  ];

  export const gFetch = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)
            }, 3000)
    })
  }