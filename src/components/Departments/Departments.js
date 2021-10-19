import React from 'react';
import useDepartment from '../../hooks/useDepartment';
import SingleDepartment from '../SingleDepartment/SingleDepartment';

const Departments = () => {
    const [departments] = useDepartment()
    return (
        <div>
            <div className='container mx-auto py-8'>
                <p className="text-center">Departments</p>
                <h2 className="text-center mb-8 primary-color text-4xl">Our Medical Departments</h2>
                <div className="grid grid-cols-5 gap-4">
                    {
                        departments.map(department => <SingleDepartment key={department.deptId} department={department}></SingleDepartment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Departments;