import { FiBookmark } from "react-icons/fi";

const BlockCard = ({ cafeData }) => {

    const { thumbnailImage, profileImage, profileName, postDate, title, readTime, hashtag } = cafeData

    return (
        <div className="mb-[78px]">
            <img src={thumbnailImage} alt="" />
            <div className="flex items-center justify-between mt-[34px]">
                <div className="flex items-center gap-6">
                    <img src={profileImage} alt="" className="w-[60px]" />
                    <div>
                        <h3 className="text-2xl font-bold">{profileName}</h3>
                        <p className="font-semibold text-[#11111199]">{postDate} (4 Days ago)</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p>{readTime} min read</p>
                    <FiBookmark />
                </div>
            </div>
            <h1 className="my-4 text-[40px] font-bold leading-[64px]">{title}</h1>
            <div className="flex items-center gap-4 font-medium text-[#11111199] text-xl">
                {
                    hashtag?.map(tag => <p>{tag}</p>)
                }
            </div>
            <button className="mt-[21px] text-[#6047EC] text-xl font-semibold underline">Make as Read</button>
        </div>
    );
};

export default BlockCard;