import React from 'react';
import { Link } from 'react-router-dom';
import certified from "../../img/certified.jpg"

const CertifiedDoctors = () => {
    return (
        <div>
            <div className='bg-white p-8 flex'>
                <div className='w-2/5'>
                    <h2 className="text-4xl mb-8 primary-color">Certified Doctors</h2>
                    <p>
                        Our goal is to deliver quality of care in a courteous,
                        respectful, and compassionate manner. We hope you will
                        allow us to care for you and to be the first and best
                        choice for healthcare. We will work with you to develop
                        individualised care plans, including management of
                        chronic diseases. We are committed to being the region’s
                        premier healthcare network providing patient centered
                        care that inspires clinical and service excellence.
                    </p>
                    <button className="bg-color text-white px-4 py-1 mt-4 font-semibold rounded">
                        <Link>View All Services</Link>
                    </button>
                </div>
                <div className='w-3/5'>
                    <img src={certified} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CertifiedDoctors;