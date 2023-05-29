import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext();
const defaultCart = JSON.parse(localStorage.getItem("cart1")) || []

const CartProvider = ({ children }) => {
    const [items, setItems] = useState(defaultCart)
    const [totalDetails, setTotalDetails] = useState()

    useEffect(() => {
        manageTotalAmount();
        localStorage.setItem("cart1", JSON.stringify(items))
    }, [items])

    const addToCart = (data, findCartItem) => {
        if (!findCartItem) {
            return setItems((items) => [data, ...items])
        }

        const filtered = items.filter((item) => item.id !== findCartItem.id)
        setItems(filtered)
    }

    const manageTotalAmount = () => {
        let discountText1 = "", discountText2 = "", discountText3 = "", amountToPay = 0;;
        const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        if (items.length >= 3) {
            let discount = (30 / 100) * total;
            amountToPay = total - discount
            console.log("amountToPay",amountToPay)
            discountText1 = "For " + items.length + " mobiles you will be getting 30% discount";
            discountText2 = "Total amount - " + total + "/- Discount 30% - Rs. " + discount + "/-";
            discountText3 = "Actual Amount to be paid - Rs" + amountToPay

        } else if (items.length === 2) {
            let discount = (20 / 100) * total;
            amountToPay = total - discount
            console.log("amountToPay",amountToPay)
            discountText1 = "For " + items.length + " mobiles you will be getting 20% discount";
            discountText2 = "Total amount - " + total + "/- Discount 20% - Rs. " + discount + "/-";
            discountText3 = "Actual Amount to be paid - Rs" + amountToPay

        }
        else if (items.length === 1) {
            let discount = (10 / 100) * total;
            amountToPay = (total - discount)
            console.log("amountToPay",amountToPay)
            discountText1 = "For " + items.length + " mobiles you will be getting 10% discount";
            discountText2 = "Total amount - " + total + "/- Discount 10% - Rs. " + discount + "/-";
            discountText3 = "Actual Amount to be paid - Rs" + amountToPay
        }

        setTotalDetails({ totalAmount: total, discountText1: discountText1, discountText2: discountText2, discountText3: discountText3, amountToPay: amountToPay })
        // setTotalAmount(total);
    }

    const manageQuantity = (type, item) => {
        let quantity = item.quantity;
        if (type === "add") {
            quantity = item.quantity + 1;
        } else {
            quantity = item.quantity - 1;
        }
        if (quantity > 0) {
            const newItems = items.map((itemDetails) => {
                if (itemDetails.id === item.id) {
                    itemDetails.quantity = quantity;
                }
                return itemDetails;
            })
            setItems(newItems)
        }
    }

    const removeFromCart = (item_id) => {
        const filtered = items.filter((item) => item.id !== item_id)
        setItems(filtered)
    }

    const removeAllFromCart = () => {
        setItems([])
    }

    const values = {
        items,
        totalDetails,
        setItems,
        addToCart,
        manageQuantity,
        removeFromCart,
        removeAllFromCart
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }