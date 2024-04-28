import React from 'react';
import { Link } from 'react-router-dom';
const CategoryContainer = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div className='grid grid-cols-3 gap-2'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Landscape Painting</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/1' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Portrait Drawing</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/2' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Watercolour Painting</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/3' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Oil Painting</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/4' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Charcoal Sketching</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/5' className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Cartoon Drawing</p>
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