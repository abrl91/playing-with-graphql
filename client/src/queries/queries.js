import { gql } from "@apollo/client";

const getAuthors = gql`
    {
        authors {
            name
            age
            id  
        }  
    }
`;

const getBooks = gql`
    {
        books {
            name
            genre
            id
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            genre
            id
        }
    }
`;

const getBook = gql`
    query($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export {getBooks, getAuthors, addBookMutation, getBook}
