import React from 'react';
import Iframe from 'react-iframe'
import bg from '../../../img/hero-bg.jpg'

const Contact = () => {
    return (
        <div>
            <div
                className='py-24'
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bg})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
            >
                <h2 className='text-center text-white text-6xl'>Contact US</h2>
            </div>
            <div>
                <Iframe
                    url='https://maps.google.com/maps?q=Suite%20100%20San%20Francisco%2C%20LA%2094107%20United%20States&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near'
                    width='100%'
                    height='400px'
                ></Iframe>
            </div>
            <div className='container mx-auto'>
                <h2 className='text-4xl py-4 text-center primary-color'>
                    Have a Question? Get In Touch
                </h2>
                <p className='text-center'>
                    Have a question? Want to book an appointment for yourself or
                    your children?
                    <br /> Give us a call or send an email to contact the
                    MedService.
                </p>
                <div className='flex bg-color p-12'>
                    <div className='w-1/3 text-gray-200'>
                        <div>
                            <h2 className='text2xl font-bold text-white'>
                                General Information
                            </h2>
                            <p>121 King Street, Melbourne,</p>
                            <p>Victoria 3000 Australia</p>
                            <p>Phone: +12 9 8765 4321</p>
                            <p>Email: hello@yourdomain.com</p>
                        </div>
                        <div className='py-8'>
                            <h2 className='text2xl font-bold text-white'>
                                Patient Experience
                            </h2>
                            <p>
                                Hannah Harper - Patient Experience Coordinator
                            </p>
                            <p>Phone: +12 9 8765 4321</p>
                            <p>Email: hello@yourdomain.com</p>
                        </div>
                        <div>
                            <h2 className='text2xl font-bold text-white'>
                                Working Hours
                            </h2>
                            <p>Monday – Friday : 8:00 AM - 8:00 PM</p>
                            <p>Saturday : 10:00 AM - 6:00 PM</p>
                            <p>Sunday : 10:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                    <div className='w-2/3'>
                        <div className='glass-effect p-12 overflow-hidden'>
                            <form action=''>
                                <div className='flex my-2 overflow-hidden'>
                                    <div className='w-1/2 mr-2'>
                                        <input
                                            className='w-full bg-gray-700 p-2 outline-none'
                                            type='text'
                                            placeholder='Enter Your Name'
                                        />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <input
                                            className='w-full p-2 bg-gray-700 outline-none'
                                            type='text'
                                            placeholder='Enter Your Email'
                                        />
                                    </div>
                                </div>
                                <div className='flex my-2 overflow-hidden'>
                                    <div className='w-1/2 mr-2'>
                                        <input
                                            className='w-full p-2 bg-gray-700 outline-none'
                                            type='text'
                                            placeholder='Enter Your Phone Number'
                                        />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <select
                                            className='w-full p-2 text-white bg-gray-700 outline-none'
                                            name=''
                                            id=''
                                        >
                                            <option value='Have you visited us before?*'>
                                                Have you visited us before?*
                                            </option>
                                            <option value='New Patient'>
                                                New Patient
                                            </option>
                                            <option value='Returning Patient'>
                                                Returning Patient
                                            </option>
                                            <option value='Other'>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full mb-2'>
                                    <input
                                        className='w-full p-2 bg-gray-700 outline-none'
                                        type='text'
                                        placeholder='Subject'
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className='w-full p-2 bg-gray-700'
                                        name=''
                                        id=''
                                        cols='30'
                                        rows='7'
                                        placeholder='Your Message'
                                    ></textarea>
                                </div>
                                <div>
                                    <input className="px-4 py-1 bg-color text-white" type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;