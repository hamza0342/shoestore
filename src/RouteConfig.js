import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import {Switch} from 'react-router';
import Home from './Home';
import NavBar from './NavBar';
import Product from './Product';
import About from './About';
import ProductItem from './ProductItem';
function RouteConfig() {
    return (
        <Router>
            <NavBar />
            <Routes>
              

               <Route path="/" element={<Home />} />
               <Route path="/product" element= {<Product />} />
               <Route exact path="/about" element= {<About />} />
               <Route path="/product/:id" element= {<ProductItem />} />
               
               
                
                
                
            </Routes>
        </Router>
    )
}

export default RouteConfig;
