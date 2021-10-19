import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleDoctor = (props) => {
    const {docImg, docName, docPosition, docId} =props.doctor
    return (
        <div className='text-center glass-effect p-4 rounded-md'>
            <img className='w-48 h-48 rounded-full' src={docImg} alt='' />
            <h2 className='primary-color font-bold'>{docName}</h2>
            <h2>{docPosition}</h2>
            <div>
                <button className='bg-color text-white px-4 py-1 my-4 rounded'>
                    <NavLink to={`/doctors/${docId}`}>View Details</NavLink>
                </button>
            </div>
        </div>
    );
};

export default SingleDoctor;