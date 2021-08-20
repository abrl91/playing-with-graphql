import './index.css';
import BookList from "./components/BookList";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from "@apollo/client";
import AddBook from "./components/AddBook";

const link = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'same-origin'
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

function App() {
  return (
      <ApolloProvider client={client}>
          <div id="main">
              <h1>Reading List</h1>
              <BookList />
              <AddBook />
          </div>
      </ApolloProvider>

  );
}

export default App;
