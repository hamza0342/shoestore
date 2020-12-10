import React from 'react';
import data from './data.json';
import './App.css';
import {Link} from 'react-router-dom';

function Product() {
     
    return (
        <div>
            <div>
                {Object.keys(data).map(shoe=>{
                    return(
                        <div key={shoe} className="shoes">
                            <h1> {data[shoe].name} </h1>
                            <div className="container">
                            <Link to={`/product/${shoe}`}><img src={data[shoe].img}></img></Link> 
                           <div className="middle">
                               <div className="text">
                               Buy Now
                               </div>
                               
                               </div>
                            </div>

                            </div>
                           
                           
                    )
                })}
            </div>
        </div>
    )
}

export default Product
