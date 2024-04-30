import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { TbSettingsPlus } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { LuBadgeDollarSign } from "react-icons/lu";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const MyCraftCard = ({ craft }) => {

    const { _id, name, subcategory, customization, image, price, rating, time, status, description } = craft;

    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://pictura-server.vercel.app/craft/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });




    }
    return (
        <div>
            <div>
                <div className="card card-side flex-col md:flex-row bg-base-100 shadow-xl">
                    <figure><img className='w-[300px] md:w-[400px] h-full' src={image} alt="Movie" /></figure>
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
                            <Link to={`/updateCraft/${_id}`} className="btn bg-[#D1BB9E] text-white">Update</Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-[#3C5B6F] text-white">Delect</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftCard;