import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
    faMapMarkerAlt,
    faSignInAlt,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const TopHeader = () => {
    const clockIcon = <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>;
    const mapMarkerIcon = (
        <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    );
    const loginIcon = <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>;
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>;
    const { user, logOut } = useAuth();
    return (
        <div className="flex py-2">
            <div className="w-1/3">
                <div className="logo">
                    <img
                        className="w-48"
                        src="https://i.ibb.co/ZVJXcnq/Ibnu-Medical-Center-Logo.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="w-2/3 flex justify-evenly items-center">
                <div className="flex items-center border p-3 shadow-sm rounded">
                    <div className="text-4xl text-indigo-800">{clockIcon}</div>
                    <div className="text-base pl-2">
                        <p>Mon – Fri : - 8:00 AM - 8:00 PM</p>
                        <p>Sat - Sun : - Closed</p>
                    </div>
                </div>
                <div className="flex items-center border p-3 shadow-sm rounded">
                    <div className="text-4xl text-indigo-800">
                        {mapMarkerIcon}
                    </div>
                    <div className="text-base pl-2">
                        <p>121 King Street, Melbourne,</p>
                        <p>Victoria 3000 Australia</p>
                    </div>
                </div>
                <div>
                    {user?.email ? (
                        <div>
                            <span className="border-2 border-black px-2 py-1 rounded-full">
                                {userIcon}
                            </span>
                        </div>
                    ) : (
                        <div className="text-right">
                            <button className="bg-color text-white text-xl rounded p-3 px-5">
                                <Link to="/login">{loginIcon} Login</Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
