import { Button, Grid } from '@mui/material';
import React, { Fragment, useState } from 'react'
import { useCart } from '../context/CartContext'
import ItemList from './ItemList';

export default function Cart() {
    const { addToCart, manageQuantity, items, totalDetails, removeAllFromCart } = useCart()
    const [show, setShow] = useState(false)
    const [actualToPay, setActualToPay] = useState()

    const handleCheckout = () => {
        setTimeout(() => {
            setActualToPay(totalDetails.amountToPay)
            setShow(true)
            removeAllFromCart()
        }, 1000)

    }

    if (show) {
        return (
            <h2>Actual amount to be paid as Rs. {actualToPay}/- only.</h2>
        )
    }

    return (
        <Fragment>
            {items.length > 0 ? (
                <Grid container columns={12} style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                    {items && items.map((product) => {
                        const findCartItem = items.find((cart_item) => cart_item.id === product.id);
                        return <ItemList key={product.id} item={product} manageQuantity={manageQuantity} findCartItem={findCartItem} addToCart={addToCart} />
                    })}
                    {totalDetails && (<>
                        <Grid container columns={12}>
                            <Grid item xs={6}>
                                <h2>Total Price of your Cart</h2>
                            </Grid>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={3}>
                                <h2>Rs-{totalDetails.totalAmount}</h2>
                                <Button onClick={handleCheckout} variant="contained" >Check Out!</Button>
                            </Grid>
                        </Grid>
                        <h2 style={{ color: "red" }}>{totalDetails.discountText1}</h2>
                        <h2 style={{ color: "red" }}>{totalDetails.discountText2}</h2>
                        <h2 style={{ color: "red" }}>{totalDetails.discountText3}</h2>
                    </>)}

                </Grid>) : <h2>No item found in cart</h2>}
        </Fragment>
    )
}
