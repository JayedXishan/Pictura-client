import React from 'react';
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";

const Craft = () => {
    return (
        <div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, velit accusantium quia eaque perspiciatis mollitia minima ratione sint officiis quas?</p>
                        <div className='flex justify-between'>
                            <div className='flex space-x-2 items-center'>
                                <LuBadgeDollarSign className='text-[#D1BB9E]' />
                                <p>200</p>
                            </div>
                            <div className='flex space-x-2 items-center'>
                                <FaRegStar className='text-[#D1BB9E]' />
                                <p>4.8</p>
                            </div>

                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#D1BB9E] text-white">View details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Craft;