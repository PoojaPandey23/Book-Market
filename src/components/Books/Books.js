import { Fragment } from "react";
import AvailableBooks from "./AvailableBooks";
import BooksSummary from "./BooksSummary";

const Books = () => {
    return (
        <Fragment>
            <BooksSummary></BooksSummary>
            <AvailableBooks></AvailableBooks>
        </Fragment>
    );
};

export default Books;