import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router';
import useDoctor from '../../../hooks/useDoctor';

const SingleDoctorDetail = () => {
    const { id } = useParams();
    const [doctors] = useDoctor([]);
    const doctor = doctors?.find(val => val.docId === id);
    const emailIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>;
    return (
        <div>
            <div className="container mx-auto py-28 px-10 md:px-0">
                <div className="md:flex md:justify-center md:items-center">
                    <div className="md:w-2/5 pt-24">
                        <img
                            className="-mt-32 rounded-3xl"
                            src={doctor?.docImg}
                            alt=""
                        />
                        <div className="py-5">
                            <h2 className="text-4xl">{doctor?.docName}</h2>
                            <h2 className="text-2xl">{doctor?.docPosition}</h2>
                        </div>
                        <div>
                            <h2 className="text-center text-3xl mt-8 primary-color font-bold">
                                Contact Info
                            </h2>
                            <div className="text-center py-5 text-xl">
                                <h2>
                                    {phoneIcon} {doctor?.docContact?.mob}
                                </h2>
                                <h2>
                                    {emailIcon} {doctor?.docContact?.email}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/6 md:pl-12">
                        <h2 className="text-4xl py-4">Details:</h2>
                        <p className="leading-8 text-xl pb-6">
                            {doctor?.docDesc}
                        </p>
                        <div className="grid grid-cols-1 gap-y-4">
                            {doctor?.experience.map(exp => (
                                <div className="border p-4 rounded">
                                    <h2 className="text-2xl font-bold">
                                        {exp?.hospitalName}
                                    </h2>
                                    <h2 className="pb-3 primary-color text-xl font-bold">
                                        {exp?.year}
                                    </h2>
                                    <p>{exp?.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctorDetail;
