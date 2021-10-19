import React from 'react';

const AppointmentSection = () => {
    return (
        <div className="bg-blue-900">
            <div className="container mx-auto py-12 md:flex items-center">
                <img
                    className="w-2/3 mx-auto md:mx-0 pb-8 md:py-0 md:w-1/3"
                    src="https://i.ibb.co/7RFxpbP/alert2.png"
                    alt=""
                />
                <div>
                    <h2 className="text-4xl text-white text-center">
                        True Healthcare For Your Family!
                    </h2>
                    <p className="text-xl px-5 md:px-0 md:w-3/5 mx-auto text-jusify text-white py-6">
                        Serve the community by improving the quality of life
                        through better health. We have put protocols to protect
                        our patients and staff while continuing to provide
                        medically necessary care.
                    </p>
                    <div className="text-center">
                        <button className="px-4 text-xl py-2 border border-white text-white">
                            Make An Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;
