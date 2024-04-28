import React from 'react';
import Banner from '../Components/Banner';
import CraftContainer from '../Components/CraftContainer';
import CategoryContainer from '../Components/CategoryContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftContainer></CraftContainer>
            <CategoryContainer></CategoryContainer>
        </div>
    );
};

export default Home;