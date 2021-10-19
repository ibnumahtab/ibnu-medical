import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from '../../img/signin.png';

const Login = () => {
    const googleImg = <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>;
    const githubImg = <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>;
    const { handleGithubSignIn, handleGoogleSignIn, handleEmailAndPassword } =
        useAuth();
    return (
        <div className="bg-color">
            <div className="container mx-auto flex items-center">
                <div className="w-3/5 text-white">
                    <div className="glass-effect p-8 m-12 rounded-lg" action="">
                        <h2 className="custom-color text-4xl">Login</h2>
                        <p className="my-4">
                            And enjoy life during the time you just saved!
                        </p>
                        <form action="">
                            <div>
                                <label htmlFor="">Email Address</label>
                                <br />
                                <input
                                    className="w-full glass-effect primary-color rounded py-2 pl-4"
                                    type="text"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Password</label>
                                <br />
                                <input
                                    className="w-full glass-effect primary-color rounded py-2 pl-4"
                                    type="text"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <input
                                    onClick={handleEmailAndPassword}
                                    className="primary-color text-xl rounded mt-4 custom-bg px-8 py-2"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </form>
                        <div className="flex justify-between my-8">
                            <button
                                onClick={handleGoogleSignIn}
                                className="px-4 py-2 w-full mr-2 custom-color border-custom"
                            >
                                {googleImg} Sign up with Google
                            </button>
                            <button
                                onClick={handleGithubSignIn}
                                className="px-4 py-2 w-full ml-2 custom-color border-custom"
                            >
                                {githubImg} Sign up with Github
                            </button>
                        </div>
                        <h2 className="my-8">
                            Haven't Account Yet?{' '}
                            <Link
                                className="primary-color font-bold"
                                to="/sign-up"
                            >
                                Sign Up
                            </Link>
                        </h2>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
