import React from 'react';
import useService from '../../../hooks/useService';
import SingleService from '../../SingleService/SingleService';

const Services = () => {
    const [services] = useService();
    return (
        <div>
            <div className="container mx-auto py-12">
                <div className="pb-5 px-5 md:px-0">
                    <p className="text-lg text-center hidden md:block">
                        The Best Medical And General Practice Care!
                    </p>
                    <h2 className="text-4xl primary-color text-center font-bold my-4">
                        Total Health Care Solutions
                    </h2>
                    <h2 className="text-2xl text-center pb-8">
                        Providing Medical Care For The Sickest In Our Community.
                    </h2>
                </div>
                <div className="grid grid-cols-1 m-5 md:m-0 md:grid-cols-4 gap-4">
                    {services.map(service => (
                        <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
