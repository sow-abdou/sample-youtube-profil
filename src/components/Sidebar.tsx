import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-20 h-screen bg-[#1A1C1E] text-white sidebar">
      <ul className="flex flex-col items-center justify-between h-full p-4">
        <div className="top">
          <li className="mb-2">
            <div className="flex items-center">
              <FaHome className="mb-3 mr-2" size={18} />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center">
              <FaUser className="mb-3 mr-2" size={18} />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center">
              <FaSearch className="mb-3 mr-2" size={18} />
            </div>
          </li>
        </div>

        <div className="bottom">
            <li>
                <IoMdSettings size={18} />
                <FaUser className="mt-5" size={18} />
            </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
