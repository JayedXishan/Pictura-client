import React from 'react';

const Banner = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div className='relative'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full h-[90vh] bgImg1 rounded-3xl">
                        <div className='flex-col mx-20 my-20'>
                            <h3 className='text-white text-4xl font-extrabold'>Heading here</h3>
                            <p className='text-white w-[60%] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam assumenda sunt ipsam, iste iure neque voluptate quis distinctio doloremque.</p>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full h-[90vh] bgImg2 rounded-3xl">
                        <div className='flex-col mx-20 my-20'>
                            <h3 className='text-white text-4xl font-extrabold'>Heading here</h3>
                            <p className='text-white w-[60%] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam assumenda sunt ipsam, iste iure neque voluptate quis distinctio doloremque.</p>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full h-[90vh] bgImg3 rounded-3xl">
                        <div className='flex-col mx-20 my-20'>
                            <h3 className='text-white text-4xl font-extrabold'>Heading here</h3>
                            <p className='text-white w-[60%] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam assumenda sunt ipsam, iste iure neque voluptate quis distinctio doloremque.</p>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full h-[90vh] bgImg4 rounded-3xl">
                        <div className='flex-col mx-20 my-20'>
                            <h3 className='text-white text-4xl font-extrabold'>Heading here</h3>
                            <p className='text-white w-[60%] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam assumenda sunt ipsam, iste iure neque voluptate quis distinctio doloremque.</p>
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