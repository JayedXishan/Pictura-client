import React from 'react';

const JoinUs = () => {
    return (
        <div className='lg:w-[1170px] mx-auto my-[100px]'>
            <div>
                <div className="hero min-h-screen bg-[#102C57] rounded-2xl">
                    <div className="hero-content p-8 flex-col lg:space-x-4 lg:flex-row">
                        <img src="https://i.ibb.co/RgsCDPf/undraw-Making-art-re-ee8w.png" className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='text-white'>
                            <h1 className="text-5xl font-bold">Join <span className='text-[#D1BB9E]'>Our Community!</span></h1>
                            <p className="py-6">Where Creativity Flourishes and Connections Blossom" - Embark on a journey with fellow artists and crafters, sharing inspiration, tips, and support along the way.</p>
                            <button className="btn bg-[#D1BB9E] text-white">Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;