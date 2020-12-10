import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import pic from './pic.jpg'

function NavBar() {
    return (
        <div>
            <div className="navigation">
            
           
            <nav>
                <ul className="list">
                    <li>
                    <Link to="/" ><img src={pic} height={60}></img></Link>
                    
                    </li>
                    <li className="list-item">
                    <Link to="/" className="anchor">Home</Link>
                    </li>
                    <li className="list-item">
                    <Link to="/product" className="anchor">Products</Link>
                    </li>
                    <li className="list-item">
                    <Link to="/about" className="anchor">About Us</Link>
                    </li>
                    
                </ul>
                
                
                
                
            </nav>
            </div>
           
        </div>
    )
}

export default NavBar
