import React from 'react';
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div className="bg-white">
            <FooterTop></FooterTop>
            <p className="text-center m-5 pb-5 text-xl">
                Copyright &copy; 2021 | All Right Reserved!
            </p>
        </div>
    );
};

export default Footer;
