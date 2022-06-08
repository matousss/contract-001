import './App.css';
import {Home} from "./components/pages/Home";
import {Page} from "./components/pages/Page";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";

function App() {
  return (
      <BrowserRouter>
          ahoj
          <Navbar/>
            <Routes>
                <Route path="/" exact={true} element={<Home/>}/>
                <Route path="/contact" element={<Page/>}/>
                <Route path="/about" element={<Page/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
