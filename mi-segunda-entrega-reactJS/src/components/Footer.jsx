import { Link } from "react-router-dom";
import logoFotter from "../assets/images/logo-footer.png";

const Footer = () => {
    return (
        <div className="container-fluid colorFooter mt-2">
            <div className="d-flex flex-wrap justify-content-around align-items-center p-3">
                <p className="col-md-4 mb-0 text-center fw-semibold fst-italic">&copy; Copyright 2024 Lulú & Co.</p>

                <Link to={"/"} className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={logoFotter} alt="logo-footer" width={130}/>
                </Link>

                <ul className="nav col-md-4 justify-content-center">
                    <li className="nav-item m-2">
                        <a href="https://www.instagram.com/" target="_blank" className="nav-link p-2">
                            <img src="./images/logo-instagram.svg" alt="instagram" width={20}></img>
                        </a>
                    </li>
                    <li className="nav-item m-2">
                        <a href="https://www.facebook.com/" target="_blank" className="nav-link p-2">
                            <img src="./images/logo-facebook.svg" alt="facebook" width={20}></img> 
                        </a>
                    </li>
                    <li className="nav-item m-2">
                        <a href="https://www.whatsapp.com/" target="_blank" className="nav-link p-2">
                            <img src="./images/logo-whatsapp.svg" alt="whatsapp" width={20}></img> 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;