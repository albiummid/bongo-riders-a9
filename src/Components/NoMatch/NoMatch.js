import React from 'react';
import "./NoMatch.css"
const NoMatch = () => {
    return (
        <div className="error-div">
             <div className="error-container">
            <h1>ERORR 404 !</h1>
            <p>You entered in an unavailable route 😁</p>
        </div>
       </div>
    );
};

export default NoMatch;