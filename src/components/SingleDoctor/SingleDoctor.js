import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleDoctor = props => {
    const { docImg, docName, docPosition, docId } = props.doctor;
    return (
        <div className="text-center border shadow-sm p-4 rounded-md">
            <img
                className="w-full border ring-1 rounded-lg mx-auto"
                src={docImg}
                alt=""
            />
            <div className="py-5">
                <h2 className="primary-color font-bold">{docName}</h2>
                <h2>{docPosition}</h2>
                <div>
                    <button className="bg-color text-white px-4 py-1 my-4 rounded">
                        <NavLink to={`/doctors/${docId}`}>More Info</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;
