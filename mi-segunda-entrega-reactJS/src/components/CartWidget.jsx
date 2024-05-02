import cart from "../assets/images/cart2.svg";

const CartWidget = () => {
    return (
        <>
            <button type="button" className="btn btn-warning-subtle position-relative">
                <img src={cart} alt="Carrito" width={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white">1</span>
            </button>
        </>
    )
}

export default CartWidget;