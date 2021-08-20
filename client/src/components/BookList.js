import {Fragment, useState} from "react";
import { useQuery } from "@apollo/client";
import { getBooks } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
    const { loading, error, data } = useQuery(getBooks);
    const [bookId, setBookId] = useState('');

    if (loading) return 'Loading Books...';
    if (error) return `Error! ${error.message}`;


    return <Fragment>
        <ul id="book-list">
            {data.books.map(book => (
                <li key={book.id} onClick={() => setBookId(book.id)}>{book.name}</li>
            ))}
        </ul>
        <BookDetails bookId={bookId} />
    </Fragment>
}

export default BookList;
