import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function Shelf({ books, shelfTitle, Category, handleShelfMove }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === Category)
            .map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  handleShelfMove={handleShelfMove}
                  Category={Category}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfTitle: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  handleShelfMove: PropTypes.func.isRequired
};
export default Shelf;
