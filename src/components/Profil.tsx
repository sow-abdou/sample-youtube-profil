import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profil = () => {
  const [bannerUrl, setBannerUrl] = useState<string>(
    "https://placehold.co/1500x400"
  );
  const [profilUrl, setProfilUrl] = useState<string>(
    "https://placehold.co/100"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      setProfilUrl(URL.createObjectURL(file));
    }
  }

  return (
    <div className="relative w-[94%] ml-[5rem]">
    
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="object-cover w-full h-60"
        />

        <button className="absolute p-2 text-white bg-gray-800 rounded-full top-2 right-2 hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
            <input
              type="file"
              id="banner-upload"
              accept="image/*"
              className="hidden"
              onChange={handleBannerChange}
            />
          </label>
        </button>
      </div>

      {/* Channel logo */}
      <div className="flex mt-[2rem] ml-4 items-center">
        <img
          src={profilUrl}
          alt="channel logo"
          className="relative object-cover w-40 h-40 border-white rounded-full"
        />
        
        <button className="absolute ml-[4rem] z-10 bg-gray-800 mt-[9rem] text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input type="file" id="profile-upload" className="hidden" accept="image/*" onChange={handleProfileChange} />
        </button>
        
        {/* Channel details */}
        <div className="mt-4 ml-4">
            <h1 className="text-2xl ml-[4rem] font-bold uppercase">Abdou Sow</h1>
            <p className="ml-[4rem]">1M views</p>
            <p className="mt-2 ml-[4rem]">
                This is a short description of the Youtube channel. 
                It gives an overview of the content and the viewers can expect
            </p>

            <button className="px-4 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700 ml-[4rem]">Subscribe</button>
        </div>
      </div>

      <Tabs />

    </div>
  );
};

export default Profil;
