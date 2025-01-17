import React from "react";

function Book({ book, handleShelfMove, Category }) {
  const handleMove = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (handleShelfMove) {
      handleShelfMove(book, value);
    }
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              book.imageLinks && book.imageLinks.thumbnail
                ? `url(${book.imageLinks.thumbnail})`
                : "none",
          }}
        >
          <div className="book-shelf-changer">
            <select value={Category} onChange={(e) => handleMove(e)}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && (
        <div className="book-authors">{book.authors.join(", ")}</div>
      )}
    </div>
  );
}

export default Book;
