import React from 'react';

const NavMenu = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fs-4">
                <div className="row">
                    <div className="col-md-8">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item px-3">
                                    <a class="nav-link active" href="/home">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link" href="/services">
                                        Features
                                    </a>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link" href="/doctors">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-between">
                        <button className="btn btn-primary">Login</button>
                        <button className="btn btn-success">Register</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavMenu;
