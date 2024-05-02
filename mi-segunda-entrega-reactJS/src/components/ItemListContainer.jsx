import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({texto}) => {
    const [items, setItems] = useState([]);

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000)
        });

        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [])

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <h2 className="colorTituloPrincipal">{texto}</h2>
                    <ItemList items={items}/>
                    <ItemCount stock={10}/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;