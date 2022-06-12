import './App.css';
import {Home} from "./components/pages/Home";
import {Page} from "./components/pages/Page";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import {Location} from "./components/pages/Location";
import {About} from "./components/pages/About";
import {Contact} from "./components/pages/Contact";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
            <AnimatePresence>
                <Routes>
                    <Route path="/" exact={true} element={<Home/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/gallery" element={<Page/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path={"*"} element={<Navigate to={'/'}/>}/>
                </Routes>
            </AnimatePresence>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
