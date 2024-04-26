import React from 'react';
import useAuth from '../Hooks/useAuth';
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    const {googleLogin,githubLogin} = useAuth();
    return (
        <div className='space-x-4'>
            <button className='py-1 px-2' onClick={()=>googleLogin()}><AiFillGooglePlusCircle className='text-4xl text-black' /></button>
            <button className='py-1 px-2 ' onClick={()=>githubLogin()}><FaGithub className='text-4xl text-black'/></button>
        </div>
    );
};

export default SocialLogin;