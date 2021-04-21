import React, { Component } from "react";
import Book from "./Book";
import booksData from "./BooksData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
    };
  }

  handleDelete = (id) => {
    console.log("Books:", this.state.books);
    console.log(id);

    const sortedBooks = this.state.books.filter((item) => item.id !== id);
    console.log("sorted Books:", sortedBooks);

    this.setState({
      books: sortedBooks,
    });
  };

  render() {
    return (
      <section>
        {this.state.books.map((item) => (
          <Book
            key={item.id}
            infoProp={item}
            handleDelete={this.handleDelete}
          ></Book>
        ))}
      </section>
    );
  }
}
