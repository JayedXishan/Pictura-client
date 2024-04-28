import React from 'react';
import { Link } from 'react-router-dom';
const CategoryContainer = () => {
    return (
        <div className='lg:w-[1170px] mx-auto my-[100px]'>
            <div className='grid grid-cols-3 gap-2'>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full  w-full' src="https://i.ibb.co/w0bGXps/landscape.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Landscape Painting</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/1' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/4Y99qY2/portrait.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Portrait Drawing</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/2' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/KFPy9c0/watercolour.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Watercolour Painting</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/3' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/rQqmy7f/oil.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Oil Painting</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/4' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/BGcGMH7/charcoal.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Charcoal Sketching</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/5' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card h-[250px] w-96 bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/jMc1jtQ/cartoon.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Cartoon Drawing</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/6' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryContainer;