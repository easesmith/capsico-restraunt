import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi'
import { GrLocation } from "react-icons/gr";
import { LuMic } from "react-icons/lu";
import EditOutletModal from './EditOutletModal';
import camera from '@/assets/camera.png';
import placeholderIcon from '@/assets/placeholderIcon.png';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { z } from 'zod';
import { outletSchema } from '@/schemas/outletSchema';
import EditOutletBasicInfoModal from './EditOutletBasicInfoModal';
import EditOutletLogoModal from './EditOutletLogoModal';
import EditOutletAddressModal from './EditOutletAddressModal';

const AboutOutlet = ({ profile, getRestaurantProfile }) => {
  const [isEditOutletModalOpen, setIsEditOutletModalOpen] = useState(false);
  const [isEditOutletBasicInfoModalOpen, setIsEditOutletBasicInfoModalOpen] = useState(false);
  const [isEditOutletLogoInfoModalOpen, setIsEditOutletLogoModalOpen] = useState(false);
  const [isEditOutletAddressInfoModalOpen, setIsEditOutletAddressModalOpen] = useState(false);

  const { basicInfo, location, name } = profile || {};

  const form = useForm({
    resolver: zodResolver(outletSchema),
    defaultValues: {
      name: "Desi Platters",
      category: ["North Indian"],
      address: "529/k, Shadab volony, Khurram Nagar, Gorakhpur",
      location: { lat: "", lng: "" }
    }
  })

  console.log("categories", form.getValues("category"));


  const onSubmit = (data) => {
    console.log("data", data);
  }

  const handleEdit = () => {
    setIsEditOutletModalOpen(true);
  }

  const handleClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(form.getValues("address"))}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div>
      <div className="w-full h-80 bg-blue-100 relative">
        <button onClick={() => setIsEditOutletLogoModalOpen(true)} className="px-8 cursor-pointer py-3 bg-white absolute right-4 top-4 flex items-center gap-3 rounded-md">
          <img src={camera} alt="" />
          <span className='font-numans text-xs text-[#1AA6F1]'>Edit Photo</span>
        </button>
        <img className='w-full h-full' src={`${import.meta.env.VITE_IMAGE_URL}/${profile?.logo}`} alt="" />
        {/* <button onClick={handleImageEdit} className='bg-white flex flex-col items-center p-6 absolute bottom-4 left-4 rounded-md'>
          <img src={placeholderIcon} alt="placeholderIcon" />
          <p className='text-[8px] text-center font-numans font-normal mt-1 text-[#323F49]'>Upload image</p>
        </button> */}
      </div>

      <div className="p-5">
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <h2 className='class-xl5 text-[#323F49]'>{name?.toUpperCase()}</h2>
            <FiEdit2 onClick={() => setIsEditOutletBasicInfoModalOpen(true)} className="text-[#323F49] cursor-pointer text-xl" />
          </div>
          <Link to="/restaurant/reviews" className='class-base1 text-[#0083C9]'>Outlet reviews</Link>
        </div>

        <div className='flex flex-col gap-1 mt-2 border-b border-b-[#DAE1E7] pb-5'>
          {/* <h2 className='class-base1 text-[#7991A4]'>{form.getValues("category").map((item) => item).join(", ")}</h2> */}
          <p className='class-base1 text-[#7991A4]'>{basicInfo?.email}</p>
          <p className='class-base1 text-[#7991A4]'>{basicInfo?.phone}</p>
          {/* <FiEdit2 onClick={handleCategoryEdit} className="text-[#323F49] cursor-pointer text-xl" /> */}
        </div>

        <div>
          <div className='flex items-center gap-5 mt-1 py-4 '>
            <GrLocation className="text-[#323F49] text-xl" />
            <h2 className='class-base1 text-[#7991A4]'>Address:{`${location?.address}, ${location?.city}, ${location?.state}, ${location?.pinCode}`}</h2>
            <FiEdit2 onClick={() => setIsEditOutletAddressModalOpen(true)} className="text-[#323F49] cursor-pointer text-xl" />
          </div>

          <button onClick={handleClick} className='class-sm4 text-[#0083C9]'>View on Maps</button>
        </div>
        {/* <div className='flex justify-end items-center mt-5'>
          <button onClick={handleEdit} className='class-sm4 text-[#0083C9]'>Edit</button>
        </div> */}
      </div>

      {isEditOutletModalOpen &&
        <EditOutletModal
          isEditOutletModalOpen={isEditOutletModalOpen}
          setIsEditOutletModalOpen={setIsEditOutletModalOpen}
          form={form}
          onSubmit={onSubmit}
        />
      }

      {isEditOutletLogoInfoModalOpen &&
        <EditOutletLogoModal
          isEditOutletLogoInfoModalOpen={isEditOutletLogoInfoModalOpen}
          setIsEditOutletLogoModalOpen={setIsEditOutletLogoModalOpen}
          getRestaurantProfile={getRestaurantProfile}
          logo={profile.logo}
        />
      }

      {isEditOutletBasicInfoModalOpen &&
        <EditOutletBasicInfoModal
          isEditOutletBasicInfoModalOpen={isEditOutletBasicInfoModalOpen}
          setIsEditOutletBasicInfoModalOpen={setIsEditOutletBasicInfoModalOpen}
          profile={profile}
          getRestaurantProfile={getRestaurantProfile}
        />
      }

      {isEditOutletAddressInfoModalOpen &&
        <EditOutletAddressModal
          isEditOutletAddressInfoModalOpen={isEditOutletAddressInfoModalOpen}
          setIsEditOutletAddressModalOpen={setIsEditOutletAddressModalOpen}
          profile={profile}
          getRestaurantProfile={getRestaurantProfile}
        />
      }
    </div>
  )
}

export default AboutOutlet