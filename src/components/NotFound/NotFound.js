import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="overflow-hidden not-found">
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <div class="button text-center">
                <i class="icon-home"></i>{' '}
                <Link to="/">Go back in initial page, is better</Link>
            </div>
        </div>
    );
};

export default NotFound;
