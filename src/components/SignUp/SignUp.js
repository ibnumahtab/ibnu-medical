import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import signUp from '../../img/signup.png';

const SignUp = () => {
    const {
        handleGoogleSignIn,
        handleGithubSignIn,
        getName,
        getEmail,
        getPassword,
        error,
        registerWithEmailAndPass,
    } = useAuth();
    const googleImg = <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>;
    const githubImg = <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>;
    return (
        <div>
            <div className="container mx-auto md:flex items-center">
                <div className="md:w-3/5">
                    <div className="border p-8 m-12 rounded-lg">
                        <h2 className="custom-color text-4xl">Sign Up</h2>
                        <p className="my-4">
                            And enjoy life during the time you just saved!
                        </p>
                        <p>{error}</p>
                        <form className="" onSubmit={registerWithEmailAndPass}>
                            <div className="md:flex justify-between md:py-5 md:mb-2">
                                <div className="md:w-1/2 md:mr-2">
                                    <input
                                        onBlur={getName}
                                        className="w-full border-b rounded py-2 pl-4"
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="md:w-1/2 md:ml-2">
                                    <input
                                        onBlur={getEmail}
                                        className="w-full border-b rounded py-2 pl-4"
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <input
                                    onBlur={getPassword}
                                    className="w-full border-b rounded py-2 pl-4"
                                    type="text"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <input
                                    className="mr-2"
                                    type="checkbox"
                                    name=""
                                    id=""
                                />
                                Creating an account means you are okay with our
                                Terms of Service and Privacy Policy
                            </div>
                            <div>
                                <button
                                    className="py-3 px-5 text-xl md:text-2xl border w-full mt-5 rounded"
                                    type="submit"
                                >
                                    Create an Account
                                </button>
                            </div>
                        </form>
                        <div className="md:flex justify-between my-8">
                            <button
                                onClick={handleGoogleSignIn}
                                className="px-4 my-2 md:my-0 py-2 w-full md:mr-2 border border-blue-500 rounded"
                            >
                                {googleImg} Sign up with Google
                            </button>
                            <button
                                onClick={handleGithubSignIn}
                                className="px-4 my-2 md:my-0 py-2 w-full md:ml-2 border border-blue-500 rounded"
                            >
                                {githubImg} Sign up with Github
                            </button>
                        </div>
                        <h2 className="my-8 text-xl text-center md:text-left">
                            Already have an account ?{' '}
                            <Link
                                className="primary-color font-bold"
                                to="/login"
                            >
                                Sign In
                            </Link>
                        </h2>
                    </div>
                </div>
                <div className="w-2/5 hidden md:block">
                    <img src={signUp} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
