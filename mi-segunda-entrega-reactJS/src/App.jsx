import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";

function App () {
  return (
    <>
      <NavBar/>
      <Carousel/>
      <Banner/>
      <ItemListContainer texto={"ENVIOS GRATIS PARA CABA, DESDE $50.000 PARA GBA Y $100.000 PARA EL RESTO DE ARGENTINA"}/>
      <Footer/>
    </>
  )
}

export default App;