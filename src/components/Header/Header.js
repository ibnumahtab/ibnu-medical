import React from 'react';
import ResponsiveHeader from '../ResponsiveHeader/ResponsiveHeader';
import TopHeader from './TopHeader/TopHeader';

const Header = () => {
    return (
        <div className="relative">
            <div className="container mx-auto">
                <TopHeader></TopHeader>
            </div>
            <hr />
            <ResponsiveHeader></ResponsiveHeader>
        </div>
    );
};

export default Header;
