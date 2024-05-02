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

export default Banner;