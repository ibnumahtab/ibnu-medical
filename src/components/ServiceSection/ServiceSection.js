import React from 'react';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import SingleService from '../SingleService/SingleService';

const ServiceSection = () => {
    const [services] = useService();
    return (
        <div className="border p-5 md:py-10 m-5 shadow-lg">
            <div className="container mx-auto  md:p-12 md:px-24">
                <h2 className="text-2xl md:text-5xl primary-color text-center pt-4">
                    Caring For The Health Of You And Your Family.
                </h2>
                <p className="w-full md:w-2/3 text-lg leading-8 mx-auto py-4 pb-10 md:text-center text-justify">
                    Health caring elicits trust, fuller patient disclosure, and
                    accurate assessment of the goals of care. It heightens
                    patient satisfaction and decreases the likelihood of
                    complaints or litigation. Health caring might even enhance
                    job satisfaction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.slice(0, 6).map(service => (
                        <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <button className="bg-color rounded px-4 py-2 text-lg text-white">
                        <Link to="/services">All Services</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
