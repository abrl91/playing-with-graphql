import {Fragment, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {getAuthors, addBookMutation, getBooks} from "../queries/queries";

const AddBook = () => {
    const { loading, error, data } = useQuery(getAuthors);
    const [addBook, { bookData, loadingBook, bookError  }] = useMutation(addBookMutation, {
        refetchQueries: [
            {query: getBooks}
        ]
    });
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ variables: {name, genre, authorId} });
    }

    return <Fragment>
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select author</option>
                    {data.authors.map(author => (
                        <option key={author.id} value={author.id}>{ author.name }</option>
                    ))}
                </select>
            </div>
            <button>+</button>

        </form>
    </Fragment>
}

export default AddBook;
