import React from 'react';

const Navbar = () => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <img
                    className="img-fluid w-25"
                    src="https://i.ibb.co/ZVJXcnq/Ibnu-Medical-Center-Logo.png"
                    alt="Ibnu Medical"
                />
            </div>
            <div className="col-sm-3 d-flex align-items-center">
                <i className="fas fa-map-marker-alt text-info fs-1 d-block pb-3 me-3"></i>
                <p>121 King Street, Melbourne Victoria 3000 Australia</p>
            </div>
            <div className="col-sm-3 d-flex align-items-center">
                <i className="fas fa-phone-alt text-primary fs-1 d-block pb-3 me-3"></i>
                <p className="lead">+1-800-654-3210</p>
            </div>
        </div>
    );
};

export default Navbar;
