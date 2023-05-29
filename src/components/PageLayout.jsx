import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function PageLayout() {
    const navigate = useNavigate();

    const { items } =  useCart()

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <IconButton aria-label="cart" onClick={() => navigate("/cart")}>
                        <Badge badgeContent={items && items.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}
