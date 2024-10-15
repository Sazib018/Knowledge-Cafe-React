import React, { useEffect , useState } from 'react';

const HomeRight = ({ saveInfo }) => {
    const [min, setMin] = useState(0)

    useEffect(() => {
        for (const element of saveInfo) {
            setMin(min + parseInt(element?.readTime));
        }
    }, [saveInfo])

    return (
        <div className='lg:w-[411px] md:w-[300px] md:ml-3'>
        <div className="bg-[#6047EC1A] text-[#6047EC] border border-[#6047EC] lg:py-[21px] py-4 rounded-lg text-center mb-6">
            <p className="lg:text-2xl text-base lg:font-bold font-medium">Spent time on read : {min} min</p>
        </div>

        <div className="items-center bg-[#1111110D] lg:p-[30px] p-5 rounded-lg shadow-md lg:w-[411px] md:w-[300px]">
            <h2 className="font-bold lg:text-2xl md:text-xl mb-4">Bookmarked Blogs : {saveInfo.length}</h2>
            {
                saveInfo.map((info , i) => <h2 key={i} className='text-lg font-semibold p-5 rounded-lg bg-[#FFF] mb-4'>{info.title}</h2>)
            }
        </div>
    </div>
    
    );
};

export default HomeRight;