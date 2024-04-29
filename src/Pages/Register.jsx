import React from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../Hooks/useAuth'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [error, setError] = useState(null);

    const [isVisible, setIsVisible] = useState(false);

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

        setError(null);
        //console.log(data.photoUrl);
        //console.log(data.name);
        if (data.password.length < 6) {
            setError('Password length must be 6');
            return
        }
        if (!/^(?=.*[A-Z]).+$/.test(data.password)) {
            setError('Password must have uppercase letter');
            return
        }
        if (!/^(?=.*[a-z]).+$/.test(data.password)) {
            setError('Password must have Lower letter');
            return
        }

        

        createUser(data.email, data.password)
            .then(result => {
                console.log(result);
                notify();
                updateUserProfile(data.name, data.photoUrl);
            })
            .catch(error => {
                notifyFailed();
                console.log(error)
            })

    };
    const notify = () => toast("Registration Successful!");
    const notifyFailed = () => toast("Registration Failed !");

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="relative">
                        <img className=' rounded-2xl w-[600px] h-[558px]' src=" https://i.ibb.co/34STxLD/6177779-3121466.jpg" alt="" />
                        <div className='absolute text-center top-[40%] left-[15%] p-4 rounded-xl bg-gray-700 bg-opacity-30'>
                            <h3 className='text-4xl font-extrabold text-[#135D66]'>Register</h3>
                            <p className='text-white mt-[10px]'>Please Register to explore beautiful arts and craft</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Photo Url</span>
                                </label>
                                <input {...register("photoUrl", { required: true })} type="text" placeholder="photo url" className="input input-bordered" />
                                {errors.photoUrl && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className='relative flex space-x-2 items-center'>
                                    <input {...register("password", { required: true })} type={isVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered flex-grow" />
                                    <div className='absolute right-4' onClick={toggleVisibility}>
                                        {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </div>
                                </div>

                                {errors.password && <span className="text-red-500">This field is required</span>}
                            </div>
                            {
                                error && <small className='text-red-500'>{error}</small>
                            }
                            <div className="form-control mt-6">
                                <button className="btn bg-[#135D66] text-white">Register</button>
                            </div>
                        </form>
                        <ToastContainer></ToastContainer>
                        <div className='flex justify-between items-center text-[14px] px-8 mb-[24px]'>
                            <p>Already have an account?</p>
                            <Link to='/login' className='py-2 px-5 rounded-[8px] bg-[#D1BB9E] text-white'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;