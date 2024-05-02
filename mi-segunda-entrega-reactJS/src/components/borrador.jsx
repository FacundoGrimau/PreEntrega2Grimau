/*import logo from "../assets/images/mi-logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-warning-subtle">
                <div className="col"></div>
                <div className="col-md text-center">
                    <navlink>    
                        <img src={logo} alt="logo-lulu" width={200} />
                    </navlink>    
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row p-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <navlink className="nav-link text-secondary text-uppercase textoNavbar fst-italic" href="#">Home</navlink>
                        </li>
                        <li className="nav-item">
                            <navlink className="nav-link text-secondary text-uppercase textoNavbar fst-italic" href="#">Remeras</navlink>
                        </li>
                        <li className="nav-item">
                            <navlink className="nav-link text-secondary text-uppercase textoNavbar fst-italic" href="#">Pantalones</navlink>
                        </li>
                        <li className="nav-item">
                            <navlink className="nav-link text-secondary text-uppercase textoNavbar fst-italic" href="#">Sweaters</navlink>
                        </li>
                        <li className="nav-item">
                            <navlink className="nav-link text-secondary text-uppercase textoNavbar fst-italic" href="#">Calzados</navlink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;



import bannerRemera from "../assets/images/banner-remera.jpg";
import bannerPantalon from "../assets/images/banner-pantalon.jpg";
import bannerSweater from "../assets/images/banner-sweater.jpg";
import bannerCalzado from "../assets/images/banner-calzado.jpg";

const Banner = () => {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerRemera})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:400, marginRight:25}}>
                    <navlink className="text-decoration-none">    
                        <span className="bg-black text-white text-uppercase px-3 py-2">Remeras</span>
                    </navlink>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerPantalon})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:400}}>
                    <navlink className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Pantalones</span>
                    </navlink>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerSweater})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:400, marginLeft:25}}>
                    <navlink className="text-decoration-none">  
                        <span className="bg-black text-white text-uppercase px-3 py-2">Sweaters</span>
                    </navlink>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerCalzado})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:400, marginLeft:25}}>
                    <navlink className="text-decoration-none">     
                        <span className="bg-black text-white text-uppercase px-3 py-2">Calzados</span>
                    </navlink>
                </div>
            </div>
        </div>
    )
}

export default Banner;*/