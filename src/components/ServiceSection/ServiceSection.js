import React from 'react';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import SingleService from '../SingleService/SingleService';

const ServiceSection = () => {
    const [services] = useService()
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto py-12'>
                <p className='text-lg text-center'>
                    The Best Medical And General Practice Care!
                </p>
                <h2 className='text-4xl primary-color text-center font-bold my-4'>
                    Total Health Care Solutions
                </h2>
                <h2 className='text-2xl text-center pb-8'>
                    Providing Medical Care For The Sickest In Our Community.
                </h2>
                <div className='grid grid-cols-3 gap-4'>
                    {services.slice(0, 6).map((service) => (
                        <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>
                    ))}
                </div>
                <div className='text-center mt-8'>
                    <button className='bg-color rounded px-4 py-1 text-white'>
                        <Link to="/services">
                            Visit All Our Services
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;