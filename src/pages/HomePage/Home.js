import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { InfoSection, Selecting } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Selecting />
        </>
    );
};

export default Home;
