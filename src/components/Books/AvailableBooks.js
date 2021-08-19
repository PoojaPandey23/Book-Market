import Card from '../UI/Card';
import classes from './AvailableBooks.module.css'
import BookItem from './BookItem/BookItem';

const DUMMY_BOOKS = [
    {
        id: 1,
        name: "Bamity",
        image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
        price: "0.32",
        stock: 3,
        author: "Nikos",
        genre: "Drama",
        published_date: "2020/11/29"
    },
    {
        id: 2,
        name: "Span",
        image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        price: "1.84",
        stock: 9,
        author: "Adela",
        genre: "Comedy",
        published_date: "2020/07/11"
    },
    {
        id: 3,
        name: "Fixflex",
        image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        price: "2.51",
        stock: 2,
        author: "Lorianna",
        genre: "Action|Crime|Drama",
        published_date: "2021/03/05"
    },
    {
        id: 4,
        name: "Y-find",
        image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        price: "1.54",
        stock: 5,
        author: "Catha",
        genre: "Action|Drama|Thriller",
        published_date: "2020/12/21"
    },
    {
        id: 5,
        name: "Ronstring",
        image: "http://dummyimage.com/250x250.png/dddddd/000000",
        price: "6.20",
        stock: 10,
        author: "Ingra",
        genre: "Comedy",
        published_date: "2020/11/06"
    }
]

const AvailableBooks = () => {

    const booksList = DUMMY_BOOKS.map(book =>
        <BookItem
            id={book.id}
            key={book.id}
            name={book.name}
            image={book.image}
            price={book.price}
            stock={book.stock}
            author={book.author}
            genre={book.genre}
            published_date={book.published_date}>
        </BookItem>
    );

    return (
        <section className={classes.books}>
            <Card>
                <ul>{booksList}</ul>
            </Card>
        </section>
    );
};

export default AvailableBooks;