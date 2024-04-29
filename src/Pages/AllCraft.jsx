import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCraft = () => {
    const crafts = useLoaderData();

    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                    <h2 className="mb-4 text-2xl text-center font-semibold leading-tight">All Arts and Crafts</h2>
                    <div className="flex justify-center overflow-x-auto">
                        <table className="lg:w-[1000px] w-[350px] text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-300">
                                <tr className="text-left">
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Subcategory</th>
                                    <th className="p-3">Rating</th>
                                    <th className="p-3 text-right">Price</th>
                                    <th className="p-3"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    crafts.map(craft => <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                        <td className="p-3">
                                            <div>
                                                <img className='w-[100px] h-[80px] rounded-xl' src={craft.image} alt="" />
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <p>{craft.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{craft.subcategory}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{craft.rating}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>{craft.price}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 ">
                                                <Link to={`/craft/${craft._id}`} className='btn bg-[#D1BB9E] text-white  w-[50px]'>View details</Link>
                                            </span>
                                        </td>
                                    </tr>)
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllCraft;