import React from "react";
import useTest from "../../../hooks/useTest";
import SingleTest from "../../SingleTest/SingleTest";

const Test = () => {
    const [tests] = useTest();
    return (
        <div className='bg-color py-12'>
            <div className='container mx-auto'>
                <h2 className='text-4xl text-center text-white mb-8'>
                    We offer discounts for this tests
                </h2>
                <div className='grid grid-cols-2 gap-8'>
                    {tests.map((test) => (
                        <SingleTest key={test.testId} test={test}></SingleTest>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Test;
