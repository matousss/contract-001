import './App.css';
import {Home} from "./components/pages/Home";
import {Page} from "./components/pages/Page";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/" exact={true} element={<Home/>}/>
                <Route path="/location" element={<Page/>}/>
                <Route path="/gallery" element={<Page/>}/>
                <Route path="/contact" element={<Page/>}/>
                <Route path="/about-us" element={<Page/>}/>
                <Route path={"*"} element={<Navigate to={'/'}/>}/>
            </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
