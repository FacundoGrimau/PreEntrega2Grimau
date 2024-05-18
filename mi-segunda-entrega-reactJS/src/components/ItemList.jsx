/* eslint-disable react/prop-types */
import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <>
            {items.map(produ => (
                <Item key={produ} item={produ}/>
            ))}
        </>
    )
}

export default ItemList;