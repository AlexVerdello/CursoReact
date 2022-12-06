import CartWidget from "./CartWidget"

const NavBar = () =>{
    return (
<>
    <nav className="NavBar" >
      <div className="logo">LOGO</div>
        <ul >
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Contacto</li>
    </ul>
      <CartWidget />        
      </nav>
      </>
    )
}
export default NavBar