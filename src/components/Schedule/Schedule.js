import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Schedule = () => {
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>;
    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <div className="grid grid-cols-4 gap-x-4 text-white">
                        <div className="p-6 rounded bg-secondary">
                            <h2 className="text-xl mb-4">Working Time</h2>
                            <p className="text-sm py-2 border-b border-gray-200">
                                Mon – Wed - 9:00 AM – 7:00 PM{' '}
                            </p>
                            <p className="text-sm py-2 border-b border-gray-200">
                                Thursday - 9:00 AM – 6:30 PM
                            </p>
                            <p className="text-sm py-2 border-b border-gray-200">
                                Friday - 9:00 AM – 6:00 PM{' '}
                            </p>
                            <p className="text-sm py-2 border-b border-gray-200">
                                Sun – Sun - CLOSED
                            </p>
                        </div>
                        <div className="p-6 rounded bg-secondary">
                            <h2 className="text-xl mb-4">Doctors Timetable</h2>
                            <p className="text-sm">
                                An magnis nulla dolor at sapien augue erat
                                iaculis purus tempor magna ipsum and vitae a
                                purus primis ipsum magna ipsum
                            </p>
                            <button className="bg-color px-4 py-2 rounded mt-4">
                                View Timetabe
                            </button>
                        </div>
                        <div className="p-6 rounded bg-secondary">
                            <h2 className="text-xl mb-4">Appointments</h2>
                            <p className="text-sm">
                                An magnis nulla dolor at sapien augue erat
                                iaculis purus tempor magna ipsum and vitae a
                                purus primis ipsum magna ipsum
                            </p>
                            <button className="bg-color px-2 py-2 rounded mt-4">
                                Make An Appointment
                            </button>
                        </div>
                        <div className="p-6 rounded bg-secondary">
                            <h2 className="text-xl mb-4">Emergency Cases</h2>
                            <h2 className="mb-4 text-xl font-bold">
                                {phoneIcon} 1-800-123-4560
                            </h2>
                            <p className="text-sm">
                                An magnis nulla dolor at sapien augue erat
                                aculis purus tempor magna ipsum vitae a purus
                                primis ipsum magna ipsum tempus feugiat dolor
                                impedit felis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
