import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../Hooks/useAuth'
import SocialLogin from '../Components/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const Login = () => {

    const { signInUser } = useAuth();
    const [isVisible, setIsVisible] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                notifySuccess();
                console.log(result.user)

                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                notifyFailed();
                console.log(error)
            })
    };
    const notifySuccess = () => toast("Successfully Logged in!");
    const notifyFailed = () => toast("Logged in Failed !");
    return (
        <div className='lg:w[1170px] mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="relative">
                        <img className=' rounded-2xl w-[600px] h-[465px]' src=" https://i.ibb.co/pKT1NDr/10893908-4613694.jpg" alt="" />
                        <div className='absolute text-center top-[40%] left-[15%] p-4 rounded-xl bg-gray-700 bg-opacity-15'>
                            <h3 className='text-4xl font-extrabold text-[#D1BB9E]'>Log in</h3>
                            <p className='text-white mt-[10px]'>Please log in to explore beautiful arts and craft</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative flex space-x-2 justify-center items-center'>
                                    <input type={isVisible ? 'text' : 'password'} placeholder="password" className="flex-grow input input-bordered" {...register("password", { required: true })} />
                                    <div className='absolute right-4' onClick={toggleVisibility}>
                                        {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </div>
                                </div>
                                {errors.password && <span>This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D1BB9E] text-white">Login</button>
                            </div>
                        </form>
                        <ToastContainer></ToastContainer>

                        <div className='flex justify-between items-center text-[14px] px-8 mb-[12px]'>
                            <p>Don't have account?</p>
                            <Link to='/register' className='py-2 px-4 rounded-xl bg-[#102C57] text-white'>Register</Link>
                        </div>

                        <div className='text-center font-semibold text-[14px] px-8 mb-[30px]'>
                            <p>Want to Login with ?</p>
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;