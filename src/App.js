
import NavBar from './component/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
// import logo from './logo.svg';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>



function App() {
let saludo = 'Hola Mundo!'
  return (
    <div className="App">
      <NavBar />    
      <ItemListContainer greeting= {saludo}/> 
      <ItemDetailContainer />
    </div>
  );
}

export default App;
