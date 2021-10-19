import React from 'react';
import welcome from '../../img/welcome.png';
const WelcomeSection = () => {
    return (
        <div className="py-5">
            <div className="container mx-auto">
                <div className="md:flex items-center">
                    <div className="md:w-1/2 px-8">
                        <img src={welcome} alt="" />
                    </div>
                    <div className="md:w-1/2 p-4">
                        <h2>The Best Medical And General Practice Care!</h2>
                        <h2 className="text-4xl pt-4 primary-color font-bold">
                            Improving The Quality Of Your Life Through Better
                            Health.
                        </h2>
                        <p className="py-4 leading-8 text-xl">
                            Snakes are sometimes perceived as evil, but they are
                            also perceived as medicine. If you look at an
                            ambulance, there's the two snakes on the side of the
                            ambulance. The caduceus, or the staff of Hermes,
                            there's the two snakes going up it, which means that
                            the venom can also be healing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;
