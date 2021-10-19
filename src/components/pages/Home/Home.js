import React from 'react';
import AppointmentSection from '../../AppointmentSection/AppointmentSection';
import HeroSection from '../../HeroSection/HeroSection';
import MeetDoctorSection from '../../MeetDoctorSection/MeetDoctorSection';
import ServiceSection from '../../ServiceSection/ServiceSection';
import WelcomeSection from '../../WelcomeSection/WelcomeSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            {/* <div className="-mt-24 mb-8">
                <Schedule></Schedule>
            </div> */}
            <WelcomeSection></WelcomeSection>
            <ServiceSection></ServiceSection>
            {/* <BestPracticeSection></BestPracticeSection>
            <TestSection></TestSection>
            <Departments></Departments>
            <ChooseUsSection></ChooseUsSection> */}
            <MeetDoctorSection></MeetDoctorSection>
            <AppointmentSection></AppointmentSection>
        </div>
    );
};

export default Home;
