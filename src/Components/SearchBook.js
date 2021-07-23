import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

function SearchBook({
  handleShelfMove,
  handleSearchResults,
  QueryResults,
  query,
}) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={(event) => {
              handleSearchResults(event.target.value);
            }}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query !== "" && QueryResults.length !== 0 ? (
            QueryResults.map((book) => (
              <li key={book.id}>
                <Book book={book} handleShelfMove={handleShelfMove} Category={book.shelf}/>
              </li>
            ))
          ) : (
            <p>No Results found</p>
          )}
        </ol>
      </div>
    </div>
  );
}
SearchBook.propTypes = {
  handleSearchResults: PropTypes.func.isRequired,
  QueryResults: PropTypes.array.isRequired,
  query:PropTypes.string.isRequired,
  handleShelfMove: PropTypes.func.isRequired,
};

export default SearchBook;
