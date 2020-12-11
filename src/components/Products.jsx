import React from "react";
import { ListGroup, Spinner, Container } from "react-bootstrap";

class Products extends React.Component {
  state = {
    products: [],
    loading: true,
  };

  // componentWillUnmount fires an instant before unmounting

  //lifecycle method that is going to be triggered just once after initial loading
  componentDidMount = async () => {
    try {
      let response = await fetch("http://localhost:3001/products");
      let products = await response.json();
      this.setState({ products: products, loading: false });
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
          <h2>PRODUCTS</h2>
          {this.state.loading && (
            <div className="font-bold d-flex justify-content-center">
              <span>Feching Products</span>
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {this.state.products.map((product, index) => (
            <ListGroup key={index}>
              <ListGroup.Item>
                Name: {product.name}-- Brand {product.brand}-- Date:
                {product.dateTime}
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </Container>
    );
  }
}

export default Products;
