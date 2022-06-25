import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import {AnimatePresence} from "framer-motion";
import {Home, Location, Gallery, Contact, About} from "./components/pages";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
            <AnimatePresence>
                <Routes>
                    <Route path="/" exact={true} element={<Home/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
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
