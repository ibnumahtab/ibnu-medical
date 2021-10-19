import React from 'react';
import image from '../../img/about-first.jpg';

const AboutUsFirst = () => {
    return (
        <div>
            <div className="container w-10/12 mx-auto">
                <div className="md:flex items-center">
                    <div className="md:w-2/5 py-10 shadow border rounded-3xl ">
                        <img
                            className="rounded-3xl mx-auto w-10/12"
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className="md:w-1/2 md:px-16">
                        <h2 className="text-2xl md:text-4xl pt-4 primary-color font-bold">
                            Clinic with Innovative Approach to Treatment
                        </h2>
                        <p className="py-4 text-xl text-justify md:text-base">
                            Porta semper lacus cursus, feugiat primis ultrice in
                            ligula risus lorem auctor tempus feugiat dolor
                            lacinia cubilia curae integer congue leo metus, eu
                            mollislorem primis in orci integer metus mollis
                            faucibus. An enim nullam tempor sapien gravida donec
                            pretium and ipsum porta justo integer at velna vitae
                            auctor integer congue
                        </p>
                        <h3 className="primary-color text-xl font-semibold">
                            Randon Pexon, Head of Clinic
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsFirst;
