import React from 'react';
import useDoctor from '../../hooks/useDoctor';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

const MeetDoctorSection = () => {
    const [doctors] = useDoctor();

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-5xl py-8 text-center primary-color font-bold">
                Meet Our Doctors
            </h2>
            <p className="text-center text-xl w-2/3 mx-auto mb-12">
                Our administration and support staff all have exceptional people
                skills and trained to assist you with all medical enquiries.
            </p>
            <div className="grid grid-cols-4 gap-8">
                {doctors.slice(0, 4).map(doctor => (
                    <SingleDoctor
                        key={doctor.docId}
                        doctor={doctor}
                    ></SingleDoctor>
                ))}
            </div>
            <div className="text-center py-12">
                <button className="bg-color text-lg rounded px-4 py-2 text-white">
                    All Doctors Profile
                </button>
            </div>
        </div>
    );
};

export default MeetDoctorSection;
