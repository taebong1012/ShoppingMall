# 리액트로 쇼핑몰 만들기

강의사이트: 코딩애플

## Bootstrap

사이트: https://react-bootstrap.github.io/ </br>
설치: `npm install react-bootstrap bootstrap` </br>

### import

1. App.js에 `import bootstrap/dist/css/bootstrap.min.css;` 입력
2. 사용하고자 하는 태그들 모두 import.
   ex) `import { Button, Navbar, Container, Nav } from "react-bootstrap";`

## Routing

설치: `npm install react-router-dom@6` ver.6 설치 커맨드 </br>
과정:

1. `index.js`에서 `<App />`을 `<BrowserRouter>`로 감싸기

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

2. `App.js`에 `react-router-dom` import 하기

```javascript
import { Routes, Route, Link } from "react-router-dom";
```

3. App.js에 라우터 작성

```javascript
<Routes>
  <Route path="/detail" element={<div>디테일페이지</div>} />
  <Route path="/cart" element={<div>카트페이지</div>} />
</Routes>

<Link to="/detail">상세페이지로 이동</Link>

<Nav.Link href="/detail">상세페이지로 이동</Nav.Link> //내브Bar 빼고 페이지 이동(SPA X)
```

## useNavigate

설치: `import { useNavigate } from "react-router-dom";` </br>
역할: 페이지 이동을 도와줌

```javascript
function App() {
  let navigate = useNavigate();
}
```
