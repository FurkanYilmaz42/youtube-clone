import { MdMenu, MdMic, MdApps } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useSidebar } from "../../context/Sidebar-Context";
import { useNavigate } from "react-router-dom";

const Header = () => {

 const {toggleSidebar} = useSidebar();
  const navigate = useNavigate()

 const handelSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim()

    if(text){
      navigate(`/results?search_query=${text}`)
    }
 };

  return (
    <header className="flex justify-between gap-4 px-4 h-14">
      {/* Sol Logo */}
      <div className="flex items-center gap-[18px]">
        <button className="p-2 hover:bg-[#3f3f3f] rounded-full transition duration-200 ">
          <MdMenu onClick={toggleSidebar} className="text-xl md:text-2xl"/>
        </button>

        <button className="flex items-center gap-1">
          <img src="/youtube.png" alt="Youtube" className="w-8" />
          <span className="text-xl font-bold tracking-tighter max-sm:hidden">YouTube</span>
        </button>
      </div>

      {/* Orta Kisim */}

      <div className="flex-1 max-w-[728px] mx-4 flex justify-center items-center">
        <form className="flex w-full max-w-[640px] items-center " onSubmit={handelSubmit}>
          <div className="flex flex-1">
            <input type="text" className="w-full h-10 p-4 bg-[#121212] border border-[#3f3f3f] rounded-l-full text-white placeholder:text-[#aaaaa] focus:border-[#1c62b9] outline-none"
            placeholder="Ara"/>
            
            <button className="w-16 h-10 bg-[#222222] border border-[#3f3f3f] rounded-r-full flex justify-center items-center hover:bg-[#3f3f3f] transition">
              <CiSearch className="text-xl text-white"/>
            </button>
          </div>

          <button className="ml-2 p-2 bg-[#181818] hover:bg-[#3f3f3f]transition rounded-full max-sm:hidden">
            <MdMic className="text-white"/>
          </button>
        </form>
      </div>

      {/* Sag Iconlar */}

      <div className="flex items-center gap-2">
        <button className="icon max-sm: hidden">
          <IoIosVideocam className="text-xl"/>
        </button>
        <button className="icon max-sm:hidden ">
          <MdApps className="text-xl"/>
        </button>
        <button className="icon relative">
          <FaBell className="text-xl"/>
          <span className=" absolute -top-1 -right-1 bg-red-600 text-xs rounded-full size-5 grid place-items-center font-bold">3</span>
        </button>
        <button className="icon">
            <RiAccountCircleLine className="text-2xl"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
