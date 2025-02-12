import { ReactNode } from 'react';

interface InfoCardProps {
  title: string,
  description: string,
  icon: ReactNode,
  
}
export const InfoCard = ({title, description, icon} : InfoCardProps) => {
  return (
    <div className=" text-left relative bg-[#242433] text-white p-5 rounded-3xl rounded-tr-[40px] flex-grow min-h-[160px] shadow-lg flex flex-col gap-5">
      {/* Title */}
      <h3 className="text-lg font-bold  w-fit py-4 border-b-[1px] border-white ">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-200 text-[16px] font-normal max-w-[301px]">
        {description}
      </p>

      {/* Icon Button */}
      <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-[#242433] p-2 rounded-md shadow-lg">
        <span>{ icon }</span>
      </div>
    </div>
  );
};