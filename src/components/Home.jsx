import { Grid } from '@mui/material';
import React, { Fragment, useState } from 'react'
import ItemCard from './ItemCard';
import { useCart } from '../context/CartContext';

const list =[
    {
    id: 1,
    image:"https://images.hindustantimes.com/tech/htmobile4/P35953/heroimage/143993-v4-apple-iphone-14-mobile-phone-large-1.jpg?width=500&height=500",
    name: 'Mobile 1',
    owner: "Owner 1",
    price: 200,
    quantity:1
},
{
    id: 2,
    image:"https://images.hindustantimes.com/tech/htmobile4/P35953/heroimage/143993-v4-apple-iphone-14-mobile-phone-large-1.jpg?width=500&height=500",
    name: 'Mobile 2',
    owner: "Owner 2",
    price: 300,
    quantity:1
},
{
    id: 3,
    image:"https://images.hindustantimes.com/tech/htmobile4/P35953/heroimage/143993-v4-apple-iphone-14-mobile-phone-large-1.jpg?width=500&height=500",
    name: 'Mobile 3',
    owner: "Owner 3",
    price: 500,
    quantity:1
}
]

export default function Home() {
    const [productList, setProductList] = useState(list)
      
    const { addToCart, items } =useCart();
  
  
    return (
      <Fragment>
        <Grid container columns={12} style={{ paddingLeft: "10%",paddingRight: "10%" }}>
          {productList && productList.map((product) => {
            const findCartItem = items.find((cart_item) => cart_item.id === product.id);
            return <ItemCard key={product.id} item={product} findCartItem={findCartItem} addToCart={addToCart}  />
          })}
        </Grid>
      </Fragment>
    )
  }
  