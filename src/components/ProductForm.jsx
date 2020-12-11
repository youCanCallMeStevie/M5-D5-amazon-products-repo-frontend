import React from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  Row,
  Spinner,
  Container,
} from "react-bootstrap";

class ProductForm extends React.Component {
  state = {
    product: {
      name: "",
      description: "",
      brand: "",
      price: "",
      dateTime: "",
      category: "",
    },
    errMessage: "",
    loading: false,
  };

  updatePost = (e) => {
    let product = { ...this.state.product };
    let currentId = e.currentTarget.id;

    product[currentId] = e.currentTarget.value;

    this.setState({ product: product });
  };

  submitProduct = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      let response = await fetch("http://localhost:3001/products", {
        method: "POST",
        body: JSON.stringify(this.state.product),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      console.log(response, "ffffffffff");
      if (response.ok) {
        alert("Product saved!");
        this.setState({
          product: {
            name: "",
            description: "",
            brand: "",
            price: "",
            dateTime: "",
            category: "",
          },
          errMessage: "",
          loading: false,
        });
      } else {
        console.log("an error occurred");
        let error = await response.json();
      }
    } catch (e) {
      console.log(e); // Error
      this.setState({
        errMessage: e.message,
        loading: false,
      });
    }
  };

  render() {
    return (
      <Container>
        <div>
          {this.state.errMessage && (
            <Alert variant="danger">
              We encountered a problem with your request
              {this.state.errMessage}
            </Alert>
          )}
          {this.state.loading && (
            <div className="d-flex justify-content-center my-5">
              please wait
              <div className="ml-2">
                <Spinner animation="border" variant="success" />
              </div>
            </div>
          )}
          <Form className="w-100 mb-5 mt-5" onSubmit={this.submitProduct}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Product Name"
                    value={this.state.product.name}
                    onChange={this.updatePost}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="description">Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    id="description"
                    placeholder=" description"
                    required
                    value={this.state.product.description}
                    onChange={this.updatePost}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="brand">Brand</Form.Label>
                  <Form.Control
                    type="text"
                    name="brand"
                    id="brand"
                    value={this.state.product.brand}
                    onChange={this.updatePost}
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="dateTime">Date and Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="dateTime"
                    id="dateTime"
                    placeholder="Date and Time"
                    value={this.state.product.dateTime}
                    onChange={this.updatePost}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="price">price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    id="price"
                    placeholder="price"
                    value={this.state.product.price}
                    onChange={this.updatePost}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default ProductForm;
