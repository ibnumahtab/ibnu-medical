import React from 'react';
import HeroBg from '../../img/hero-bg.jpg';

const HeroSection = () => {
    return (
        <div
            className="overflow-hidden"
            style={{
                background: `url(${HeroBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}
        >
            <div className="container mx-auto py-24">
                <div className="w-2/4">
                    <div className="glass-effect rounded-md my-12 p-8">
                        <h1 className="text-6xl primary-color font-semibold my-4">
                            Find The Best Doctor Near By You!
                        </h1>
                        <p className="text-white text-xl leading-7">
                            Qualified doctors available six days a week, view
                            our timetable to make an appointment. Please feel
                            free to contact our friendly reception staff with
                            any general or medical enquiry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
