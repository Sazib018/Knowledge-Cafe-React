const Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-0 flex justify-between mt-3">
            <div className="">
                <h1 className="text-[40px] font-bold leading-[64px]">Knowledge Cafe</h1>
            </div>
            <div className="flex-none">
                <div className="avatar">
                    <div className="w-[60px] h-[60px] rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://i.ibb.co.com/TRCmHQ9/profile.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;