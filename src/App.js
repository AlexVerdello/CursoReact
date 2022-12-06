import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';



function App() {
let saludo = 'Hola Mundo!'
  return (
    <div className="App">
      <NavBar />    
     < ItemListContainer greeting= {saludo}/> 
    </div>
  );
}

export default App;
