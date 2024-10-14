import React, { useEffect, useState } from 'react';
import BlockCard from './BlockCard';

const HomeLeft = () => {

    const [cafeDatas , setCafeDatas] = useState([])

    useEffect (() =>{
        fetch('Cafe.json')
        .then(res => res.json())
        .then(data => setCafeDatas(data))
    },[])
    return (
        <div className='w-[845px]'>
           {
            cafeDatas.map(cafeData => <BlockCard
            key={cafeData.id}
            cafeData={cafeData}
            ></BlockCard>)
           }
        </div>
    );
};

export default HomeLeft;