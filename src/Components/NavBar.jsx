import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'
import { useState } from 'react'
const NavBar = () => {
    const { logout, user } = useAuth();
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className='lg:w-[1170px] mx-auto dark:bg-slate-900'>
                <header className="p-4">
                    <div className="container flex justify-between items-center h-16 mx-auto">
                        <div className="lg:hidden">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to='/' className=''>Home</Link>
                                    <Link to='/allcraft' className=''>All Craft</Link>
                                    <Link to='/mycraft' className='mr-4'>My Craft</Link>
                                    <Link to='/addcraft' className='mr-4'>Add craft</Link>
                                </ul>
                            </div>
                        </div>

                        <Link to='/' className="flex items-center p-2  ">
                            <span className='text-[#D1BB9E] font-vibe text-5xl '>Pictura</span>

                        </Link>
                        <ul className="items-stretch hidden space-x-3 lg:flex text-gray-700 font-extralight ">
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
                    
                        <div>
                            {
                                user?.email ? <div className='flex space-x-2'>
                                    <div>
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} onMouseEnter={() => setIsHovered(true)}
                                                        onMouseLeave={() => setIsHovered(false)} />

                                                    {isHovered && (
                                                        <div className="absolute bg-gray-800 text-white px-2 py-1 rounded-lg text-xs whitespace-nowrap bottom-0 left-1/2">
                                                            <span>{user.displayName}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                                <li>
                                                    <a className="justify-between text-primary">
                                                        Profile
                                                        <span className="badge">New</span>
                                                    </a>
                                                    <small className='text-xs'>{user.displayName}</small>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <button className='text--[#102C57]' onClick={logout}>Logout</button>
                                </div>
                                    :
                                    <div className="items-center space-x-2 flex-shrink-0  lg:flex">
                                        <Link to='/login' className="self-center px-7 py-2 rounded border-2 border-[#102C57] text-[#102C57] hidden lg:flex font-vibe">Sign in</Link>
                                        <Link to='/register' className="self-center px-8 py-3  rounded bg-[#D1BB9E] text-white font-vibe">Sign up</Link>
                                    </div>
                            }
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default NavBar;