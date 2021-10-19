import React from 'react';
import { Link } from 'react-router-dom';
import useTest from '../../hooks/useTest'
import SingleTest from '../SingleTest/SingleTest';

const TestSection = () => {
    const [tests] = useTest()
    return (
        <div className='bg-color py-12'>
            <div className='container mx-auto'>
                <h2 className='text-4xl text-center text-white mb-8'>
                    We offer discounts for this tests
                </h2>
                <div className='grid grid-cols-3 gap-8'>
                    {tests.slice(0, 6).map((test) => (
                        <SingleTest key={test.testId} test={test}></SingleTest>
                    ))}
                </div>
                <div className="text-center pt-8">
                    <button className="bg-white rounded px-4 py-1 primary-color font-bold ">
                        <Link to="/tests">More Tests Info</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestSection;