import { faArrowRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import grid1 from '../../img/grid-1.png'

const BestPracticeSection = () => {
     const playIcon = <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    return (
        <div>
            <div>
                <div className='flex py-12 items-center'>
                    <div className='w-1/2 pl-24'>
                        <p className="">BEST PRACTICES</p>
                        <h2 className='primary-color font-bold mt-4 text-4xl'>
                            Clinic with Innovative Approach to Treatment
                        </h2>
                        <p className="my-8">
                            Doc House has been present in Europe since 1990,
                            offering innovative solutions, specializing in
                            medical services for treatment of medical
                            infrastructure. With over 100 professionals actively
                            participates in numerous initiatives aimed at
                            creating sustainable change for patients!
                        </p>
                        <h2>Highest Quality Care:</h2>
                        <ul className="my-2">
                            <li className='flex'>
                                <p className='primary-color text-xl pr-2'>
                                    {arrowIcon}
                                </p>
                                <p>
                                    If your blood doesn’t clot properly – it’s a
                                    haematologist who will conduct the blood
                                    tests, confirm if you have haemophilia, and
                                    offer treatment.
                                </p>
                            </li>
                            <li className='flex'>
                                <p className='primary-color text-xl pr-2'>
                                    {arrowIcon}
                                </p>
                                <p>
                                    When there’s an outbreak of infection in a
                                    hospital, it’s a medical microbiologist or
                                    infection doctor who will advise the
                                    infection control teams and work hard to
                                    contain it.
                                </p>
                            </li>
                            <li className='flex'>
                                <p className='primary-color text-xl pr-2'>
                                    {arrowIcon}
                                </p>
                                <p>
                                    For those having trouble getting pregnant –
                                    it’s a reproductive scientist who will
                                    investigate, diagnose and, where possible,
                                    treat any infertility issues.
                                </p>
                            </li>
                        </ul>
                        <div className='flex mt-4'>
                            <div>
                                <h2 className='primary-color text-3xl pr-2'>
                                    {playIcon}
                                </h2>
                            </div>
                            <div>
                                <h2>Watch Our Video</h2>
                                <h2 className="text-gray-400">Duration: 2:40 min</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img className="w-full" src={grid1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestPracticeSection;