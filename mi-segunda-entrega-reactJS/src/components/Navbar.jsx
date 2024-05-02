import logo from "../assets/images/mi-logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-warning-subtle p-3">
                <div className="col"></div>   
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="mi-logo" width={200} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>
            </div>    
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                                <a className="nav-link text-secondary text-uppercase textoNavbar dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Productos</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Remeras</a></li>
                                    <li><a className="dropdown-item" href="#">Pantalones</a></li>
                                    <li><a className="dropdown-item" href="#">Buzos y Sweaters</a></li>
                                    <li><a className="dropdown-item" href="#">Calzado</a></li>
                                </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#" aria-disabled="true">Locales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#" aria-disabled="true">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;