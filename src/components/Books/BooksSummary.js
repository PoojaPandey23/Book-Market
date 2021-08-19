import classes from './BooksSummary.module.css'

const BooksSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>
                Amazing Books, Delivered To You
            </h2>
            <p>
                Choose your favorite book from our broad selection of available books
                and enjoy a good read at home.
            </p>
            <p>
                All our books are with high quality and by famous writers!
            </p>
        </section>
    );
};

export default BooksSummary;