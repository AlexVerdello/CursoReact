import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>



function App() {
let saludo = 'Fabrica de Colchones. El rey de la espuma!'
  return (
    <BrowserRouter className="App">
      <NavBar />    
      <Routes>
        <Route path="/" element={<ItemListContainer greeting= {saludo}/>} />
        <Route path="/cat/:catId" element={<ItemListContainer greeting= {saludo}/>} />
        {/* <Route path="/cat/colchones" element={<ItemListContainer greeting= {saludo}/>} /> */}
        <Route path="/detail/:prodId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
