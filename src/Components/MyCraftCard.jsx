import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { TbSettingsPlus } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { LuBadgeDollarSign } from "react-icons/lu";
const MyCraftCard = ({ craft }) => {
    const { name, subcategory, customization, image, price, rating, time, status, description } = craft;
    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-[400px] h-full' src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className="card-title">{name}</h2>
                                <small>{subcategory}</small>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <FaRegStar className='text-3xl text-yellow-500' />
                                <p>{rating}</p>
                            </div>
                        </div>
                        <p className='mt-[12px]'>{description}</p>
                        <div className='flex justify-evenly items-center'>
                            <div className='flex items-center space-x-1 text-green-400'>
                                <LuBadgeDollarSign />
                                <p>{price}</p>
                            </div>
                            <div className='flex items-center space-x-1 text-blue-400'>
                                <TbSettingsPlus />
                               <p>{customization}</p> 
                            </div>
                            <div className='flex items-center space-x-1 text-orange-300'>
                                <IoIosPricetags />
                                <p>{status}</p>
                                
                            </div>
                        </div>
                        <div className="card-actions justify-end ">
                            <button className="btn bg-[#D1BB9E] text-white">Update</button>
                            <button className="btn bg-[#3C5B6F] text-white">Delect</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftCard;