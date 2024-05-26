import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/mi-logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row colorNavbarPrincipal">
                <div className="col"></div>   
                <div className="col-md text-center">
                    <Link to={"/"}>
                        <img src={logo} alt="mi-logo" width={200} />
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end p-3">
                    <CartWidget/>
                </div>
            </div>    
            <div className="row bg-black p-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/"}>Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/remeras"} aria-disabled="true">Remeras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/pantalones"} aria-disabled="true">Pantalones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/sweaters"} aria-disabled="true">Sweaters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/calzado"} aria-disabled="true">Calzados</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;