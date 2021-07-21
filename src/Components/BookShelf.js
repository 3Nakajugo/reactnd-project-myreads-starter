import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

function Bookshelf({ books, handleShelfMove }) {
  return (
    <div className="list-books-content">
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
    </div>
  );
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfTitle: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  handleShelfMove: PropTypes.func.isRequired,
};

export default Bookshelf;
