import React from 'react';
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div className="bg-white">
            <FooterTop></FooterTop>
            <p className="text-center pb-5 text-xl">
                Copyright &copy; 2021 | All Right Reserved!
            </p>
        </div>
    );
};

export default Footer;
