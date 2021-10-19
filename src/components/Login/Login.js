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
        <div>
            <div className="container mx-auto md:flex items-center">
                <div className="md:w-3/5">
                    <div className="border p-8 m-12 rounded-lg">
                        <h2 className="custom-color text-4xl">Sign in</h2>
                        <p className="my-4">
                            And enjoy life during the time you just saved!
                        </p>
                        <form>
                            <div className="mb-3">
                                <input
                                    className="w-full border-b rounded py-2 pl-4"
                                    type="text"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="w-full border-b rounded py-2 pl-4"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <button
                                    onClick={handleEmailAndPassword}
                                    className="py-3 px-5 text-2xl border w-full mt-5 rounded"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="md:flex justify-between my-8">
                            <button
                                onClick={handleGoogleSignIn}
                                className="px-4 py-2 w-full my-2 md:my-0 mr-2 border border-blue-500 rounded"
                            >
                                {googleImg} Sign in with Google
                            </button>
                            <button
                                onClick={handleGithubSignIn}
                                className="px-4 py-2 w-full my-2 md:my-0 mr-2 border border-blue-500 rounded"
                            >
                                {githubImg} Sign in with GitHub
                            </button>
                        </div>
                        <h2 className="my-8 text-xl text-center md:text-left">
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
                <div className="w-2/5 hidden md:block">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
