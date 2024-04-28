import React from 'react';
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoryCard = ({craft}) => {
    const {name , subcategory , customization ,  image , price , rating , time , status , description}=craft;
    //console.log(craft._id);
    return (
        <div>
            <div>
                <div className="card card-compact w-96 h-[435px] bg-base-100 shadow-xl">
                    <figure><img className='h-[230px] w-full' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <div className='flex justify-between'>
                            <div className='flex space-x-2 items-center'>
                                <LuBadgeDollarSign className='text-[#D1BB9E]' />
                                <p>{price}</p>
                            </div>
                            <div className='flex space-x-2 items-center'>
                                <FaRegStar className='text-[#D1BB9E]' />
                                <p>{rating}</p>
                            </div>

                        </div>
                        <div className=" card-actions justify-end">
                            <Link to={`/categoryNo/${craft._id}`} className="btn bg-[#D1BB9E] text-white">View details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;