import React from 'react';
import success from '../../img/success.jpg'

const SuccessTreatment = () => {
    return (
        <div>
            <div className="bg-white p-8">
                <div className='flex'>
                    <div className='w-1/3'>
                        <h2 className='text-4xl mb-8 primary-color'>
                            Together we can Achieve more things
                        </h2>
                        <p>
                            Our goal is to deliver quality of care in a
                            courteous, respectful, and compassionate manner. We
                            hope you will allow us to care for you and to be the
                            first and best choice for healthcare. We will work
                            with you to develop individualised care plans,
                            including management of chronic diseases. We are
                            committed to being the region’s premier healthcare
                            network providing patient centered care that
                            inspires clinical and service excellence.
                        </p>
                        <button className='bg-color text-white px-4 py-1 mt-4 font-semibold rounded'>
                            Our Doctors
                        </button>
                    </div>
                    <div className='w-2/3'>
                        <img src={success} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessTreatment;