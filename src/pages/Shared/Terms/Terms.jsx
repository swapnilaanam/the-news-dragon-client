import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga animi cum consequatur, ex nihil itaque laudantium sit blanditiis. Temporibus enim porro repellendus nostrum? Earum, accusamus maiores aperiam iusto ut amet!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;