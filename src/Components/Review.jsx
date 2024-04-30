import React from 'react';
import { GrCaretNext } from "react-icons/gr";
const Review = () => {
    return (
        <div >
            <div className='lg:w-[1170px] mx-auto'>
                <div className='w-full mb-[60px]'>
                    <h3 className='text-center text-2xl font-bold mb-4' >Customar Feedback</h3>
                    <p className='w-[70%] text-center mx-auto'>Share your experiences and insights, guiding us as we strive to elevate your journey through the world of art and craft.</p>
                </div>
                <div className='relative flex flex-col lg:flex-row lg:items-center lg:justify-around bg-[#102C57] p-8 text-white rounded-2xl'>
                    <div className=' carousel w-[60%]'>
                        <div id='review1' className="carousel-item w-full">
                            <div id='item1' className="carousel-item w-full container flex flex-col lg:w-[50%]  p-6 mx-auto divide-y rounded-m">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#D1BB9E]">Leroy Jenkins</h4>
                                            <span className="text-xs dark:text-gray-600">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-orange-500 w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-orange-500 text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                                    <p>Absolutely thrilled with my purchase! The quality of the materials exceeded my expectations, and the delivery was prompt. Highly recommend!</p>
                                    <p>Fantastic variety of products and excellent customer service. I had a query about a specific item, and the support team was incredibly helpful and responsive. </p>
                                </div>
                            </div>
                        </div>
                        <div id='review2' className="carousel-item w-full">
                            <div id='item1' className="carousel-item w-full container flex flex-col lg:w-[50%]  p-6 mx-auto divide-y rounded-m">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#D1BB9E]">Jhon Depp</h4>
                                            <span className="text-xs dark:text-gray-600">5 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-orange-500 w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-orange-500 text-xl font-bold">4.8</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                                    <p>This website is a game-changer for me. I've found unique supplies and inspiration that I couldn't find anywhere else. Thank you for fueling my creative journey.</p>
                                    <p>The art and craft supplies I ordered arrived in perfect condition, and the packaging was eco-friendly too! I appreciate the attention to detail and commitment to sustainability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[35%] space-y-4 left-8">
                            <div><a href="#review1" className="btn btn-xs rounded-full">1</a></div>
                            <div><a href="#review2" className="btn btn-xs rounded-full">2</a></div>

                        </div>

                    <div className="flex flex-col  border-l-2 border-[#D1BB9E] p-8 shadow-sm  lg:p-12">
                        <div className="flex flex-col w-full">
                            <h2 className="text-3xl font-semibold text-center text-[#D1BB9E]">Customer reviews</h2>
                            <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                                <div className="flex">
                                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[#D1BB9E]">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[#D1BB9E]">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[#D1BB9E]">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[#D1BB9E]">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-400">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <span className="dark:text-gray-600">4 out of 5</span>
                            </div>
                            <p className="text-sm dark:text-gray-600">861 global ratings</p>
                            <div className="flex flex-col mt-4">
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                                        <div className="bg-orange-500 h-4 w-5/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                                        <div className="bg-orange-500 h-4 w-4/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                                        <div className="bg-orange-500 h-4 w-3/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                                        <div className="bg-orange-500 h-4 w-2/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                                        <div className="bg-orange-500 h-4 w-1/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;