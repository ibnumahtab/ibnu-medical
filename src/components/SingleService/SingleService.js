import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleService = props => {
    const { title, description, image, id } = props.service;
    return (
        <div className="text-center border rounded py-4 px-8">
            <img
                className="mx-auto p-4 w-24 h-24"
                src={image}
                alt=""
            />
            <h2 className="text-2xl font-bold primary-color py-3">{title}</h2>
            <p className="text-justify leading-7">{description}</p>
            <button className="bg-color text-white px-4 py-2 my-4 rounded">
                <NavLink to={`/services/${id}`}>More Info</NavLink>
            </button>
        </div>
    );
};

export default SingleService;
