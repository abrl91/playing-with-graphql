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

export {getBooks, getAuthors}
