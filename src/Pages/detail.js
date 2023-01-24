import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function detail(props) {
  let { id } = useParams();

  return (
    <div className="container">
      <Row>
        <Col>
          <img src={props.products[id].imgUrl} width="100%" />
        </Col>
        <Col>
          <h4 className="pt-5">{props.products[id].title}</h4>
          <p>{props.products[id].content}</p>
          <p>{props.products[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
    </div>
  );
}

export default detail;
