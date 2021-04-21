// import "./App.css";
import React from "react";
import BookList from "./components/BookList";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar variant="dark" className="mb-4">
        <Navbar.Brand href="#"> Book List App </Navbar.Brand>{" "}
      </Navbar>

      <BookList />
    </>
  );
}

export default App;
