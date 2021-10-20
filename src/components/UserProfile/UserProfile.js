import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const { user, logOut } = useAuth();
    const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>;
    console.log(user);
    return (
        <div className="w-48 border absolute right-0 rounded py-5 bg-white text-center z-50 overflow-auto ">
            <div className="container mx-auto">
                <div className="py-3">
                    {user?.photoURL ? (
                        <img
                            className="rounded-full mx-auto"
                            src={user.photoURL}
                            alt=""
                        />
                    ) : (
                        <div className="text-4xl py-4">{userIcon}</div>
                    )}
                </div>
                <div>
                    <h2 className="text-lg">{user.displayName}</h2>
                    <h2 className="text-sm">{user.email}</h2>
                    <div>
                        <button className="bg-white my-4 px-2 py-1 rounded primary-color">
                            View Profile
                        </button>
                    </div>
                    <hr />
                    <div>
                        <button
                            className="bg-white px-4 pt-4 primary-color"
                            onClick={logOut}
                        >
                            LogOut
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
