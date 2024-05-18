import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                const producto = arrayProductos.find(item => item.id == 1)
                resolve(producto);
            }, 2000)
        });

        promesa.then(respuesta => {
            setItem(respuesta);
        })
    }, [])

    return (
        <div className="container">
            <div className="row my-5">
                    <ItemDetail item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;