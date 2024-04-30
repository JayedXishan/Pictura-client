import React from 'react';
import Craft from './Craft';
import { useLoaderData } from 'react-router-dom';

const CraftContainer = () => {
    
    const crafts = useLoaderData();
    
    return (
        <div className='lg:w-[1170px] mx-auto my-[100px]'>
            <div className='w-full mb-[60px]'>
                <h3 className='text-center text-2xl font-bold mb-4' >Our Arts and Crafts </h3>
                <p className='w-[70%] text-center mx-auto'>Explore our Art and Craft Section: A sanctuary for creatives, where inspiration flourishes and every project becomes a masterpiece waiting to be born.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                     crafts.slice(0,6).map(craft => <Craft craft={craft} key={craft._id}></Craft>)
                }
                
            </div>
        </div>
    );
};

export default CraftContainer;