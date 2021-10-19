import React from 'react';
import AppointmentSection from '../../AppointmentSection/AppointmentSection';
import BestPracticeSection from '../../BestPracticeSection/BestPracticeSection';
import ChooseUsSection from '../../ChooseUsSection/ChooseUsSection';
import Departments from '../../Departments/Departments';
import HeroSection from '../../HeroSection/HeroSection';
import MeetDoctorSection from '../../MeetDoctorSection/MeetDoctorSection';
import Schedule from '../../Schedule/Schedule';
import ServiceSection from '../../ServiceSection/ServiceSection';
import TestSection from '../../TestSection/TestSection';
import WelcomeSection from '../../WelcomeSection/WelcomeSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <div className="-mt-24 mb-8">
                <Schedule></Schedule>
            </div>
            <WelcomeSection></WelcomeSection>
            <ServiceSection></ServiceSection>
            <BestPracticeSection></BestPracticeSection>
            <TestSection></TestSection>
            <Departments></Departments>
            <ChooseUsSection></ChooseUsSection>
            <MeetDoctorSection></MeetDoctorSection>
            <AppointmentSection></AppointmentSection>
        </div>
    );
};

export default Home;