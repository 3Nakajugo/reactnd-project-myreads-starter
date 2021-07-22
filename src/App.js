import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./Components/BookShelf";
import { Route } from "react-router-dom";
import SearchBook from "./Components/SearchBook";

class BooksApp extends React.Component {
  state = {
    books: [],
    query: "",
    QueryResults: []
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
      console.log(this.state);
    });
  };

  changeBookShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then((res) => {
      this.setState((currentState) => ({
        books: currentState.books
          .filter((b) => b.id !== book.id)
          .concat([book]),
      }));
    });
  };


  handleSearchResults = (query) => {
    this.setState(() => ({
      query: query.trim()
    }));

    if (query.length > 0) {
      BooksAPI.search(query)
        .then((data) => {
          if (typeof data !== 'undefined' && data.length > 0) {

            this.setState(() => ({ QueryResults: data }));
          }
        })
        .catch(this.setState(() => ({ QueryResults: [] })));
    } else {
      this.setState(() => ({ QueryResults: [] }));
    }
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              books={this.state.books}
              handleShelfMove={this.changeBookShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBook
              handleShelfMove={this.changeBookShelf}
              handleSearchResults={this.handleSearchResults}
              QueryResults={this.state.QueryResults}
              query={this.state.query}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
