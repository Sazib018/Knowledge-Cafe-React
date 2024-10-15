import React from 'react';

const HomeRight = () => {
    return (
        <div className='lg:w-[411px]  md:ml-3'>
        <div className="bg-[#6047EC1A] text-[#6047EC] border border-[#6047EC] lg:py-[21px] rounded-lg text-center mb-6">
            <p className="lg:text-2xl  text-base font-bold">Spent time on read : 177 min</p>
        </div>

        <div className="items-center h-[1352px] bg-[#1111110D] lg:p-[30px] p-5 rounded-lg shadow-md lg:w-[411px] md:w-[300px]">
            <h2 className="font-bold lg:text-2xl md:text-xl mb-4">Bookmarked Blogs : 8</h2>
            <div className="bg-[#FFFFFF] lg:px-5 px-3 lg:py-5 py-3 rounded-lg">
                <h3 className='lg:text-lg text-base font-semibold lg:leading-7'>Master Microsoft Power Platform and Become an In-Demand!</h3>
            </div>
        </div>
    </div>
    
    );
};

export default HomeRight;