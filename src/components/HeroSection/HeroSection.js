import React from 'react';
import HeroBg from '../../img/hero-bg.jpg'

const HeroSection = () => {
    return (
        <div
            className='overflow-hidden'
            style={{
                background: `linear-gradient(rgba(20, 60, 255, 0.7), rgb(20, 60, 255, 0.7)),url(${HeroBg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: "cover",
            }}
        >
            <div className='container mx-auto pb-24'>
                <div className='w-2/3'>
                    <div className='glass-effect rounded-md my-12 p-8'>
                        <h2 className='text-black font-semibold'>WELCOME TO OUR CLINIC</h2>
                        <h1 className='text-6xl text-white font-semibold my-4'>
                            TAKE CARE OF <br />
                            YOUR HEALTH
                        </h1>
                        <p>
                            Feugiat primis ligula risus auctor egestas augue
                            mauri lorem viverratortor in iaculis placerat eugiat
                            mauris ipsum in viverra tortor and gravida purus
                            pretium lorem primis in orci integer
                        </p>
                        <button className='bg-blue-500 px-4 text-white py-2 mt-4 rounded'>
                            More About Our Clinic
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;