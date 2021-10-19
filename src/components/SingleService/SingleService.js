import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleService = (props) => {

    const {title, description, image, id} = props.service
    return (
        <div className='text-center bg-blue-300 rounded p-4'>
            <img
                className='mx-auto bg-white hover:bg-purple-400 rounded-full p-4 w-24 h-24'
                src={image}
                alt=''
            />
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p>{description}</p>
            <button className='bg-color text-white px-4 py-1 my-4 rounded'>
                <NavLink to={`/services/${id}`}>View Details</NavLink>
            </button>
        </div>
    );
};

export default SingleService;