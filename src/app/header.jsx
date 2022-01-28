import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () =>{
    return(
        <div className="bg-dark" id="tha-head-container">
            <Link to="/" className="text-white" id="tha-head">Store</Link>
        </div>
    );
}