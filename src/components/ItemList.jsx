import { Button, Grid } from "@mui/material"

const ItemList = ({
    item,
    addToCart,
    manageQuantity,
    findCartItem,
}) => {

    return (
        <Grid key={`${item.id}-item`} item xs={12}>
            <Grid container columns={12}>
                <Grid item xs={6}>
                    <span><img src={item.image} alt="" style={{ height: "30px" }} /></span>
                    <span><b>{item.name}</b></span>
                </Grid>
                <Grid item xs={3}>
                    <button onClick={()=>manageQuantity("subtract",item)}>-</button>
                    <button>{item.quantity}</button>
                    <button onClick={()=>manageQuantity("add",item)}>+</button>
                </Grid>
                <Grid item xs={3}>
                    <span style={{ marginRight: "5px" }}><b>Price: {item.quantity} X {item.price}</b></span>
                    <Button variant="contained" onClick={() => addToCart(item, findCartItem)}>Remove</Button>
                </Grid>
            </Grid>
            <hr/>
        </Grid>
    )
}

export default ItemList