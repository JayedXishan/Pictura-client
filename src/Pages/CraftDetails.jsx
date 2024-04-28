import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { TbSettingsPlus } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { LuBadgeDollarSign } from "react-icons/lu";
import { IoTime } from "react-icons/io5";
const CraftDetails = () => {
    const crafts = useLoaderData();

    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div>
                <div className="p-5 mx-auto sm:p-10 md:p-16 ">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src={crafts.image} alt="" className="rounded-xl w-full h-60 sm:h-96 " />
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-[#A79277] text-white">
                            <div className="space-y-2">
                                <div className='flex justify-between items-center'>
                                    <p className=" text-2xl font-semibold sm:text-3xl text-[#135D66]">{crafts.name}</p>
                                    <div className='flex text-2xl items-center space-x-3'>
                                        <FaRegStar className='text-3xl text-yellow-500' />
                                        <p>{crafts.rating}</p>
                                    </div>
                                </div>
                                <p className="text-xs ">{crafts.subcategory}
                                </p>
                            </div>
                            <div className="">
                                <p>{crafts.description}</p>
                            </div>
                            <div className='flex justify-evenly items-center'>
                                <div className='flex items-center space-x-1 text-green-400'>
                                    <LuBadgeDollarSign />
                                    <p>{crafts.price}</p>
                                </div>
                                <div className='flex items-center space-x-1 text-blue-400'>
                                    <TbSettingsPlus />
                                    <p>{crafts.customization}</p>
                                </div>
                                <div className='flex items-center space-x-1 text-orange-300'>
                                    <IoIosPricetags />
                                    <p>{crafts.status}</p>

                                </div>
                                <div className='flex items-center space-x-1 text-[#135D66]'>
                                    <IoTime />
                                    <p>{crafts.time}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CraftDetails;