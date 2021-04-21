import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  toggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
    console.log("info is toggled");
  };
  render() {
    // prop
    console.log(this.props);
    const { id, img, book, author } = this.props.infoProp;

    const { handleDelete } = this.props;

    return (
      <div className="row">
        <Card className="card">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <h4>
              <strong>Title: </strong>
              {book}
            </h4>
            <h4>
              <strong>Author:</strong> {author}
            </h4>
            <Button
              variant="outline-info"
              style={{ position: "absolute", bottom: "10px" }}
              onClick={() => handleDelete(id)}
            >
              Remove
            </Button>{" "}
            <Button
              variant="outline-info"
              style={{ position: "absolute", bottom: "55px" }}
              onClick={this.toggleInfo}
            >
              Details
            </Button>{" "}
            {this.state.showInfo && (
              <p>
                This book is the best seller of 2021 so far. Its the most
                popular product of the year.
              </p>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Book;
