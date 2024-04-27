import React from 'react';

const Banner = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full h-[90vh] bgImg1 rounded-3xl">
                        {/* <img src="https://i.ibb.co/7z4Ltsx/dan-farrell-f-T49-Qn-Fuc-Q8-unsplash.jpg" className="w-full rounded-3xl h-full" /> */}
                    </div>
                    <div id="item2" className="carousel-item w-full h-[90vh] bgImg2 rounded-3xl">
                        {/* <img src="https://i.ibb.co/LzPzC9y/21894134-2111-w030-n002-246-B-p1-246.jpg" className="w-full" /> */}
                    </div>
                    <div id="item3" className="carousel-item w-full h-[90vh] bgImg3 rounded-3xl">
                        {/* <img src="https://i.ibb.co/tJ4hrVx/pexels-zaksheuskaya-709412-1616403.jpg" className="w-full" /> */}
                    </div>
                    <div id="item4" className="carousel-item w-full h-[90vh] bgImg4 rounded-3xl">
                        {/* <img src="https://i.ibb.co/pKT1NDr/10893908-4613694.jpg" className="w-full" /> */}
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;