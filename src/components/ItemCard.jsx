import { Button, Grid } from "@mui/material"

const ItemCard = ({
    item,
    addToCart,
    findCartItem,
}) => {

    return (
            <Grid key={`${item.id}-item`} item xs={6} lg={4}>
                <img src={item.image} alt="" style={{height:"100px"}} />
                <h2>{item.name}</h2>
                <p>Owner: {item.owner}</p>
                <p><b>Price: {item.price}</b></p>
                <Button variant="contained" onClick={() => addToCart(item, findCartItem)}>{findCartItem ? "Remove from cart" : "Add to Cart"}</Button>
            </Grid>
    )
}

export default ItemCard