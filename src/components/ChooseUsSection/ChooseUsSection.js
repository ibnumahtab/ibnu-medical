import React, { useState } from 'react';
import ModernTechnology from '../ModernTechnology/ModernTechnology';
import SuccessTreatment from "../SuccessTreament/SuccessTreatment";
import CertifiedDoctors from "../CertifiedDoctors/CertifiedDoctors";

const ChooseUsSection = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    };
    return (
        <div className='bg-color py-8'>
            <div className='container mx-auto'>
                <p className="text-blue-100 text-center">Why You Choose Us</p>
                <h2 className="text-center text-4xl text-white">What’s Our Speciality</h2>
                <ul className='tab-list flex justify-center transition-all  delay-1000 my-12 '>
                    <li
                        className={
                            activeTab === "tab1"
                                ? "cursor-pointer pb-2 text-3xl font-semibold border-b-4 px-4 border-blue-600 text-white"
                                : "cursor-pointer pb-2 border-b-4 border-blue-300 hover:border-blue-600 px-4 text-3xl font-semibold text-blue-300 hover:text-white"
                        }
                        onClick={handleTab1}
                    >
                        Modern Technology
                    </li>
                    <li
                        className={
                            activeTab === "tab2"
                                ? "cursor-pointer pb-2 text-3xl font-semibold border-b-4 px-4 border-blue-600 text-white"
                                : "cursor-pointer pb-2 border-b-4 border-blue-300 hover:border-blue-600 px-4 text-3xl font-semibold text-blue-300 hover:text-white"
                        }
                        onClick={handleTab2}
                    >
                        Success of Treatments
                    </li>
                    <li
                        className={
                            activeTab === "tab3"
                                ? "cursor-pointer pb-2 text-3xl font-semibold border-b-4 px-4 border-blue-600 text-white"
                                : "cursor-pointer pb-2 border-b-4 border-blue-300 hover:border-blue-600 px-4 text-3xl font-semibold text-blue-300 hover:text-white"
                        }
                        onClick={handleTab3}
                    >
                        Certified Doctors
                    </li>
                </ul>
                <div className='tab-content transition-all delay-1000'>
                    {activeTab === "tab1" ? (
                        <ModernTechnology></ModernTechnology>
                    ) : (
                        ""
                    )}
                    {activeTab === "tab2" ? (
                        <SuccessTreatment></SuccessTreatment>
                    ) : (
                        ""
                    )}
                    {activeTab === "tab3" ? (
                        <CertifiedDoctors></CertifiedDoctors>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChooseUsSection;