import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveHeader = ({ fixed }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const barsIcon = <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>;
    return (
        <>
            <div className="flex flex-wrap py-2">
                <div className="w-full">
                    <nav className="relative flex flex-wrap items-center justify-between rounded">
                        <div className="container mx-auto flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                <Link
                                    className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                    to="/"
                                >
                                    <img
                                        src="https://i.ibb.co/ZVJXcnq/Ibnu-Medical-Center-Logo.png"
                                        alt=""
                                    />
                                </Link>
                                <button
                                    className="primary-color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    {barsIcon}
                                </button>
                            </div>
                            <div
                                className={
                                    'lg:flex flex-grow items-center' +
                                    (menuOpen ? ' flex' : ' hidden')
                                }
                                id="example-navbar-info"
                            >
                                <ul className="flex flex-col w-full md:w-max md:flex-row list-none md:ml-auto font-semibold">
                                    <li className="nav-item;">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug primary-color hover:opacity-75 px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1 text-lg"
                                            to="/"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug primary-color hover:opacity-75 px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1 text-lg"
                                            to="/about-us"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug primary-color hover:opacity-75 px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1 text-lg"
                                            to="/services"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug primary-color hover:opacity-75 px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1 text-lg"
                                            to="/doctors"
                                        >
                                            Doctors
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="flex items-center uppercase font-bold leading-snug primary-color hover:opacity-75 px-6 py-4 hover:bg-blue-200 cursor-pointer border mx-1 text-lg"
                                            to="/contact"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
export default ResponsiveHeader;
