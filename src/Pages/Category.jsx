import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../Components/CategoryCard';
const Category = () => {
    const crafts = useLoaderData();
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div className='text-center mb-4 text-2xl font-extrabold'>
                {
                    crafts[0]?.subcategory ? <p>{crafts[0].subcategory}</p> : <p>No Craft</p>
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {
                    crafts.map(craft => <CategoryCard craft={craft} key={craft._id}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;<p>Category</p>