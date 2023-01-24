import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function about() {
  return (
    <>
      <div>회사 정보임</div>
      <Outlet></Outlet>
    </>
  );
}

export default about;
