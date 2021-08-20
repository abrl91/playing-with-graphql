import {Fragment} from "react";
import { getBook } from "../queries/queries";
import {useQuery} from "@apollo/client";

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(getBook, {
        variables: { id: bookId }
    });

    const displayBookDetails = () => {
        const { book } = data;
        if (book) {
            console.log(book)
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            )
        }

        if (!book) {
            return(
                <div>No Book Selected :( </div>
            );
        }
    }

    if (loading) return 'Loading a Book...';
    if (error) return ``;

    return <Fragment>
        <div id="book-details">
            {displayBookDetails()}
        </div>
    </Fragment>
}

export default BookDetails;
