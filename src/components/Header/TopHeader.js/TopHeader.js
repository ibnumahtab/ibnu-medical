
import { faAddressCard, faClock } from '@fortawesome/free-regular-svg-icons';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo.png'
const TopHeader = () => {
    const clockIcon = <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const addressIcon = <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
    const loginIcon = <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    const {user, logOut} = useAuth()
    return (
        <div className='flex py-2'>
            <div className='w-1/3'>
                <div className='logo'>
                    <img className='w-48' src={logo} alt='' />
                </div>
            </div>
            <div className='w-2/3 flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='text-4xl text-blue-500'>{clockIcon}</div>
                    <div className='text-sm pl-2'>
                        <p>Mon – Fri : - 8:00 AM - 8:00 PM</p>
                        <p>Sat - Sun : - Closed</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='text-4xl text-blue-500'>{addressIcon}</div>
                    <div className='text-sm pl-2'>
                        <p>121 King Street, Melbourne,</p>
                        <p>Victoria 3000 Australia</p>
                    </div>
                </div>
                <div>
                    {
                        user?.email ? (<div>
                            <span className="border-2 border-black px-2 py-1 rounded-full">{userIcon}</span>
                        </div>) : (
                                (<div className='text-right'>
                    <button className='bg-color text-white rounded px-4 py-1'>
                        <Link to="/login">{loginIcon} Login</Link>
                    </button>
                        </div>)
                )
                    }
                </div>
            </div>
        </div>
    );
};

export default TopHeader;