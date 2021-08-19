import { Fragment } from 'react';
import booksLibrary from '../../assets/books.png';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Book Market</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={booksLibrary} alt="Library of books"></img>
            </div>
        </Fragment>
    );
};

export default Header;