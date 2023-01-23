import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";

function ProductCard(props) {
  return (
    <Col>
      <img src={props.product.imgUrl} width="80%" />
      <h4>{props.product.title}</h4>
      <p>{props.product.content}</p>
      <p>{props.product.price}</p>
    </Col>
  );
}

function App() {
  let [products] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">AppleShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {products.map((product, i) => {
            return <ProductCard product={product} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
