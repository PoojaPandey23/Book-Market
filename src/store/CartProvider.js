import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        // const existingCartItemIndex = state.items.findIndex(
        //     (item) => item.id === action.item.id
        // );

        // const existingCartItem = state.items[existingCartItemIndex];
        // let updatedItems;

        // //if the item is part of the cart item array.
        // if (existingCartItem) {
        //     const updatedItem = {
        //         ...existingCartItem,
        //         amount: existingCartItem.amount + action.item.amount
        //     };
        //     updatedItems = [...state.items];
        //     updatedItems[existingCartItemIndex] = updatedItem;
        // }
        // //if the item is added for the first time.
        // else {
        //     const updatedItems = state.items.concat(action.item);
        // }



        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    // if (action.type === 'REMOVE') {
    //     const existingCartItemIndex = state.items.findIndex(
    //         (item) => item.id === action.id
    //     );
    //     const existingItem = state.items[existingCartItemIndex];
    //     const updatedTotalAmount = state.totalAmount - existingItem.price;
    //     if (existingItem.amount === 1) {
    //         updatedItems = state.items.filter(item => item.id !== action.id)
    //     } else {
    //         const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
    //         updatedItems = [...state.items];
    //         updatedItems[existingCartItemIndex] = updatedItem;
    //     }
    //     return {
    //         items: updatedItems,
    //         totalAmount: updatedTotalAmount

    //     };
    // }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD', item: item
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE', id: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;