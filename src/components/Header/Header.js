import React from 'react';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader.js/TopHeader';

const Header = () => {
    return (
        <div>
            <div className="container mx-auto">
                <TopHeader></TopHeader>
            </div>
            <hr />
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <nav className="w-3/4">
                        <ul className="flex primary-color font-semibold">
                            <li className="px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1">
                                <Link to="/">About Us</Link>
                            </li>
                            <li className="px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1">
                                <Link to="/department">Department</Link>
                            </li>
                            <li className="px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1">
                                <Link to="/doctors">Doctors</Link>
                            </li>
                            <li className="px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1">
                                <Link to="/doctors">Tests</Link>
                            </li>
                            <li className="px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1">
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="text-xl border hover:bg-blue-200 border-indigo-900 shadow px-6 py-4 rounded">
                        Make An Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
