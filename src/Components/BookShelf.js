import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Bookshelf({ books, handleShelfMove }) {
  return (
    <div className="list-books-content">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelf
          books={books}
          shelfTitle={"Currently Reading"}
          Category={"currentlyReading"}
          handleShelfMove={handleShelfMove}
        />
        <Shelf
          books={books}
          shelfTitle={"Want To Read"}
          Category={"wantToRead"}
          handleShelfMove={handleShelfMove}
        />
        <Shelf
          books={books}
          shelfTitle={"Read"}
          Category={"read"}
          handleShelfMove={handleShelfMove}
        />
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfMove: PropTypes.func.isRequired,
};

export default Bookshelf;
