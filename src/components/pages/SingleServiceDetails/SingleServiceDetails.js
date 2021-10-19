import React from 'react';
import { useParams } from 'react-router';
import useService from '../../../hooks/useService';

const SingleService = () => {
    const { id } = useParams();
    const [services] = useService([]);
    const service = services?.find(ser => ser.id === id);
    return (
        <div>
            <div className="container mx-auto">
                <div className="text-center pt-12">
                    <img className="inline-block" src={service?.image} alt="" />
                    <h2 className="text-4xl py-8 text-white">
                        {service?.title}
                    </h2>
                    <p className="text-white">{service?.detailDesc}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
