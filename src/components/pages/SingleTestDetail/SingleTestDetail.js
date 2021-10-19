import React from 'react';
import { useParams } from 'react-router';
import useTest from '../../../hooks/useTest';

const SingleTestDetail = () => {
    const { id } = useParams()
    const [tests] = useTest([])
    const test = tests?.find(val => val.testId === id)
    console.log(test);
    return (
        <div>
            <div className='container mx-auto py-12'>
                <div className='flex'>
                    <div className='w-1/3'>
                        <img src={test?.testImg} alt='' />
                        <h2 className="text-2xl mt-4 py-2 font-bold">Current Fee: $ {test?.testCurrFee}</h2>
                        <h2 className="text-2xl py-2 font-bold">Previous Fee: $ {test?.testPrevFee}</h2>
                    </div>
                    <div className='w-2/3 pl-8'>
                        <h2 className='text-4xl primary-color mb-4'>
                            {test?.testName}
                        </h2>
                        <p>{test?.testFullDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestDetail;