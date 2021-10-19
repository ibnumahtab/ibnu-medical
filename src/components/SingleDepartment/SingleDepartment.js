import React from 'react';

const SingleDepartment = (props) => {
    const {deptName, deptImg,totalDoc} = props.department
    return (
        <div className='text-center'>
            <div className='relative'>
                <img className="h-32 w-full" src={deptImg} alt='' />
                <div className='bg-overlay text-white absolute top-0 bottom-0 left-0 right-0'>
                    <h2 className="mt-8 text-2xl">{deptName}</h2>
                    <h2>Total Doctor: {totalDoc}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleDepartment;