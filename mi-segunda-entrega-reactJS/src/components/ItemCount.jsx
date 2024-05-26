import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const onAdd = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador(1);
            console.log("Agregaste " + contador + " Productos al Carrito!");
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div className="container">
            <div className="row my-1">
                <div className="col mx-1">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn bg-dark text-white border-white rounded-0" onClick={decrementar}> - </button>
                        <button type="button" className="btn bg-dark text-white border-white rounded-0">{contador}</button>
                        <button type="button" className="btn bg-dark text-white border-white rounded-0" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col mx-1">
                    <button type="button" className="btn btn-outline-dark text-uppercase rounded-0" onClick={onAdd}>Agregar Al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;