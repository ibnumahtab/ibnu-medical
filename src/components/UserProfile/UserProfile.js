import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const {user, logOut} = useAuth()
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    return (
        <div className="w-48 bg-color absolute right-0 rounded text-white text-center z-50 overflow-auto ">
            <div className="container mx-auto">
                <div>
                    {
                        user?.photeUrl ? <img src={user.photoUrl} alt="" /> : <div className="text-4xl py-4">{userIcon}</div>
                    }
                </div>
                <div>
                    <h2>{user.displayName}</h2>
                    <div>
                        <button className="bg-white my-4 px-2 py-1 rounded primary-color">View Profile</button>
                    </div>
                    <hr />
                    <div className="text-left px-4 pb-4">
                        <h2>Appointment History</h2>
                        <h2>Last Visited Doctor</h2>
                        <h2>Favourite Doctors</h2>
                    </div>
                    <div>
                        <button className="bg-white px-4 py-1 primary-color mb-4" onClick={logOut}>LogOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;