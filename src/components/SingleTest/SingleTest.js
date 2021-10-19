import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleTest = (props) => {

    const { testName, testCurrFee, testIcon,testPrevFee, testId } = props.test
    
    return (
        <div className='flex items-center glass-effect p-4 rounded'>
            <div className='w-1/3'>
                <img className='w-24 h-24' src={testIcon} alt='' />
            </div>
            <div className='w-2/3 pl-4'>
                <h2 className='text-white font-bold'>{testName}</h2>
                <p className='text-pink-200'>Current Fee: ${testCurrFee}</p>
                <p className='text-pink-200'>Previous Fee: ${testPrevFee}</p>
                <div>
                    <button className='bg-color text-white px-2 py-1 rounded mt-2'>
                        <NavLink to={`/tests/${testId}`}>Detail Info</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleTest;