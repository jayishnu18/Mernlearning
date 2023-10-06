import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import { Home, About } from './Components/F1';
import Nav from './Components/nav';

function App() {
  return (
    <div>
      <HashRouter>
	   <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
