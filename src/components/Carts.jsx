import React from "react";
import { Row, Col, Card, Spinner, Container } from "react-bootstrap";

class Carts extends React.Component {
  state = {
    carts: [],
    loading: true,
  };

  // componentWillUnmount fires an instant before unmounting

  //lifecycle method that is going to be triggered just once after initial loading
  componentDidMount = async () => {
    try {
      let response = await fetch("http://localhost:3001/carts");
      let carts = await response.json();
      this.setState({ carts: carts, loading: false });
    } catch (e) {
      console.log("error happened", e);
      this.setState({ loading: false });
    }
  };

  render() {
    console.log("IN THE RENDER METHOD");

    return (
      <Container>
        <div className="mb-5">
          <h2>carts</h2>
          {this.state.loading && (
            <div className="font-bold d-flex justify-content-center">
              <span>Feching carts</span>
              <Spinner animation="border" variant="success" />
            </div>
          )}
        </div>
        <div className="font-bold d-flex flex justify-content-center">
          {this.state.carts.map((cart, index) => (
            <Row>
              <Col xs={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body style={{ backgroundColor: "#F0F8FF" }}>
                    <Card.Title>Carts</Card.Title>
                    <Card.Text>{cart.name}</Card.Text>
                    <Card.Text>{cart.surname}</Card.Text>
                    <Card.Text>{cart.total}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    );
  }
}

export default Carts;
