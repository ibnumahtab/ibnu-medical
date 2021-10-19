import React from 'react';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader.js/TopHeader';

const Header = () => {
    
    return (
        <div>
            <div className='container mx-auto'>
                <TopHeader></TopHeader>
            </div>
            <hr />
            <div className='container mx-auto'>
                <div className='flex justify-between py-4'>
                    <nav className='w-3/4'>
                        <ul className='flex primary-color font-semibold'>
                            <li className='px-2'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='px-2'>
                                <Link to='/'>About Us</Link>
                            </li>
                            <li className='px-2'>
                                <Link to='/department'>Department</Link>
                            </li>
                            <li className='px-2'>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className='px-2'>
                                <Link to='/doctors'>Doctors</Link>
                            </li>
                            <li className='px-2'>
                                <Link to='/doctors'>Tests</Link>
                            </li>
                            <li className='px-2'>
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className='bg-blue-500 px-4 text-right py-2 rounded text-white'>
                        Make An Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;