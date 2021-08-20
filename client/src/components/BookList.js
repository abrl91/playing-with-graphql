import {Fragment} from "react";
import { useQuery } from "@apollo/client";
import { getBooks } from "../queries/queries";

const BookList = () => {
    const { loading, error, data } = useQuery(getBooks);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return <Fragment>
        <ul id="book-list">
            {data.books.map(book => (
                <li key={book.id}>{book.name}</li>
            ))}
        </ul>
    </Fragment>
}

export default BookList;
