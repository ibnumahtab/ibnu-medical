import React from 'react';
import { useParams } from 'react-router';
import useService from '../../../hooks/useService';
import serviceBg from '../../../img/single-service-bg.jpg'

const SingleService = () => {
    const { id } = useParams()
    const [services] = useService([])
    const service = services?.find(ser => ser.id === id)
    return (
        <div
            className='h-screen'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${serviceBg})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <div className='container mx-auto'>
                <div className='text-center pt-12'>
                    <img className="inline-block" src={service?.image} alt='' />
                    <h2 className='text-4xl py-8 text-white'>{service?.title}</h2>
                    <p className="text-white">{service?.detailDesc}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;