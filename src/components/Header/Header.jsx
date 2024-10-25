import profile from "../../assets/profile.png"

const Header = () => {
    return (
        <div className="w-full flex justify-between items-center py-4 sm:py-6 lg:py-8 border-b-2 border-[#11111126]">
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#111111] font-bold'>Knowledge Cafe</h1>
            <img className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 rounded-full" src={profile} alt="" />            
        </div>
    );
};

export default Header;