import React, { useEffect, useState } from 'react';
import BlockCard from './BlockCard';

const HomeLeft = ({setSaveInfo, saveInfo}) => {
    const [cafeDatas, setCafeDatas] = useState([])

    useEffect(() => {
        fetch('Cafe.json')
            .then(res => res.json())
            .then(data => setCafeDatas(data))
    }, [])
    return (
        <div className='xl:w-[845px] lg:w-[580px]'>
            {
                cafeDatas.map(cafeData => <BlockCard
                    key={cafeData.id}
                    cafeData={cafeData}
                    saveInfo={saveInfo}
                    setSaveInfo={setSaveInfo}
                ></BlockCard>)
            }
        </div>
    );
};

export default HomeLeft;