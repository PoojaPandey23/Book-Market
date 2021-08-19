import classes from './BookItem.module.css';
import BookItemForm from './BookItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';


const BookItem = props => {
    const cartCtx = useContext(CartContext);

    const dollarToRupees = 118.83;

    const price = `Rs.${props.price * dollarToRupees.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.book}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.image}</div>
                <div className={classes.price}>{price}</div>
                <div>{props.stock}</div>
                <div>{props.author}</div>
                <div>{props.genre}</div>
                <div>{props.published_date}</div>

            </div>
            <div>
                <BookItemForm onAddToCart={addToCartHandler}></BookItemForm>
            </div>
        </li>
    );
};

export default BookItem;