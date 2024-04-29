import React from 'react';
import Banner from '../Components/Banner';
import CraftContainer from '../Components/CraftContainer';
import CategoryContainer from '../Components/CategoryContainer';
import JoinUs from '../Components/JoinUs';
import Review from '../Components/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftContainer></CraftContainer>
            <CategoryContainer></CategoryContainer>
            <Review></Review>
            <JoinUs></JoinUs>
        </div>
    );
};

export default Home;