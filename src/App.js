
import './App.css';
import { Link, Route ,} from "react-router-dom";
import {Routes} from "react-router-dom";
import React  from 'react';
import Navbar from './mycomponents/navbar.js'
import Details from './mycomponents/details.js'
import Productlist from './mycomponents/productlist.js'
import Default from './mycomponents/default.js'
import Cart from './mycomponents/cart';
import Modal from './mycomponents/modal.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Productlist/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
        <Route path="*" element={<Default />} ></Route>
      </Routes>
      <Modal></Modal>
    </React.Fragment>
    );
}

export default App;
