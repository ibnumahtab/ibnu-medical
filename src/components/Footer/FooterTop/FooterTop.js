import React from 'react';

const FooterTop = () => {
    return (
        <div>
            <div className="container py-12 mx-auto border-t-4 border-b-4 mt-24">
                <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
                    <div className="m-5">
                        <img
                        className="w-full md:w-2/3"
                            src="https://i.ibb.co/ZVJXcnq/Ibnu-Medical-Center-Logo.png"
                            alt=""
                        />
                        <p className="py-4 text-lg">
                            Our goal is to deliver quality of care in a
                            courteous, respectful, and compassionate manner. We
                            hope you will allow us to care for you and strive to
                            be the first and best choice for your family
                            healthcare.
                        </p>
                    </div>

                    <div className="border mx-10 md:mx-0 rounded-lg p-8">
                        <div className="text-center">
                            <h2 className="text-2xl">Quick Contacts</h2>
                            <p className="pb-5">
                                If you have any questions or need help, feel
                                free to contact with our team.
                            </p>
                            <h2 className="text-4xl">01061245741</h2>
                            <p>
                                2307 Beverley Rd Brooklyn, New York 11226 United
                                States.
                            </p>
                        </div>
                    </div>
                    <div className="border mx-10 md:mx-0 rounded-lg p-8">
                        <div className="text-center">
                            <h2 className="text-2xl">Quick Contacts</h2>
                            <p className="pb-5">
                                If you have any questions or need help, feel
                                free to contact with our team.
                            </p>
                            <h2 className="text-4xl">01061245741</h2>
                            <p>
                                2307 Beverley Rd Brooklyn, New York 11226 United
                                States.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
