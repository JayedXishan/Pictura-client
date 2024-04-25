import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className='lg:w-[1170px] mx-auto'>
                <header className="p-4">
                    <div className="container flex justify-between h-16 mx-auto">
                        <Link to='/' className="flex items-center p-2 text-4xl font-extrabold ">
                            Pictura
                        </Link>
                        <ul className="items-stretch hidden space-x-3 lg:flex">
                            <li className="flex">
                                <Link to='/' className="flex items-center px-4 ">Home</Link>
                            </li>
                            <li className="flex">
                                <Link to='/allcraft' className="flex items-center px-4 ">All Craft</Link>
                            </li>
                            <li className="flex">
                                <Link to='/mycraft' className="flex items-center px-4">My Craft</Link>
                            </li>
                            <li className="flex">
                                <Link to='/addcraft' className="flex items-center px-4">Add Craft</Link>
                            </li>
                        </ul>
                        <div className="items-center flex-shrink-0 hidden lg:flex">
                            <button className="self-center px-8 py-3 rounded">Sign in</button>
                            <button className="self-center px-8 py-3 font-semibold rounded ">Sign up</button>
                        </div>
                        <button className="p-4 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default NavBar;