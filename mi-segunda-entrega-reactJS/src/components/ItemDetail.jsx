/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="card text-start mb-3">
                <div className="row align-items-center">
                    <div className="col-md-4 p-4">
                        <img src={item.imagen} className="img-fluid rounded-start" alt={item.nombre}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-4">
                            <h1 className="fs-3 text-uppercase fw-semibold px-3">{item.nombre}</h1>
                            <p className="fs-4 fw-bold px-3">${item.precio}</p>
                            <p className="fs-6 fst-italic text-secondary px-3">{item.descripcion}</p>
                            <ItemCount stock={item.stock}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;