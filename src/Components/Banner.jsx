import React from 'react';

const Banner = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div className='relative'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full h-[90vh] bgImg1 rounded-3xl">
                        <div className='flex-col mx-20 my-20'>
                            <h3 className='text-white text-4xl font-extrabold'>Inspiring <span className='text-[#D1BB9E] font-vibe font-normal'>Artistry & Craftsmanship</span></h3>
                            <p className='text-white w-[60%] mt-6'>Where Dreams Brush Against Reality Step into a realm where imagination knows no bounds, and every stroke of the brush transforms visions into tangible masterpieces.</p>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full h-[90vh] bgImg2 rounded-3xl">
                        <div className='flex-col mx-20 my-20'>
                            <h3 className='text-white text-4xl font-extrabold'>Where <span className='text-[#D1BB9E] font-vibe font-normal'>Creativity Takes Flight</span></h3>
                            <p className='text-white w-[60%] mt-6'> Where Creativity Takes Flight Explore a world of limitless imagination, where every creation is a testament to the boundless potential of artistry.</p>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full h-[90vh] bgImg3 rounded-3xl">
                        <div className='flex-col mx-20 my-20'>
                            <h3 className='text-white text-4xl font-extrabold'>Crafting <span className='text-[#D1BB9E] font-vibe font-normal'>Beauty from Imagination</span>
                             </h3>
                            <p className='text-white w-[60%] mt-6'>Crafting Beauty from Imagination Embark on a journey through a realm of handmade wonders, where each piece tells a story of passion and craftsmanship.</p>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full h-[90vh] bgImg4 rounded-3xl">
                        <div className='flex-col mx-20 my-20'>
                            <h3 className='text-white text-4xl font-extrabold '>Unleashing <span className='text-[#D1BB9E] font-vibe font-normal'>Your Inner Artist</span></h3>
                            <p className='text-white w-[60%] mt-6'>Dive into a universe of color and creativity, where every stroke brings your imagination to life on canvas.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[35%] space-y-4 right-8">
                    <div><a href="#item1" className="btn btn-xs rounded-full">1</a></div>
                    <div><a href="#item2" className="btn btn-xs rounded-full">2</a></div>
                    <div><a href="#item3" className="btn btn-xs rounded-full">3</a></div>
                    <div><a href="#item4" className="btn btn-xs rounded-full">4</a></div>

                </div>
            </div>
        </div>
    );
};

export default Banner;