import React from 'react';
import sectionBg from '../../img/section-bg.jpg';

const AppointmentSection = () => {
    return (
        <div
            className=""
            style={{
                background: `url(${sectionBg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}
        >
            <div className="container mx-auto py-12">
                <h2 className="text-xl text-center text-white">
                    Need a Doctor for Check-up?
                </h2>
                <h2 className="text-4xl py-4 text-white text-center">
                    Just Make An Appointment & You're Done!
                </h2>
                <div className="text-center">
                    <button className="px-4 py-2 border border-white text-white">
                        Make An Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;
