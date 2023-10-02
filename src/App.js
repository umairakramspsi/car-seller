import CarListPagination from "./components/CarListPagination";
import Mainbody from "./components/Mainbody";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfond from "./components/Notfond";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/page/:page" Component={CarListPagination}/>
          <Route Component={Notfond}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
