import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";

const InfoCard = (props) => {
  const { title, img, description, ratings, price, subtitle } = props.info;
  return (
    <div className='flex hover:bg-gray-100 p-2 rounded-lg hover:shadow-lg transition cursor-pointer active:scale-95 select-none transform transition duration-150 ease-in-out '>
      <div className='relative h-30 w-36 md:h-44 md:w-48 rounded-lg'>
        <Image
          src={img}
          layout='fill'
          className='rounded-lg'
          objectFit='cover'
          objectPosition='left'
        />
      </div>
      <div className='pl-2 flex-grow flex flex-col '>
        <div className='flex justify-between'>
          <h2 className='text-xs md:text-sm text-gray-500'>{subtitle}</h2>
          <HeartIcon className='h-6' />
        </div>
        <h1 className='text-sm md:text-md font-semibold'>{title}</h1>
        <div className='border-t w-6 pb-2 mt-1 ' />
        <div className='flex flex-wrap space-x-1'>
          {description.map((text) => (
            <div className='flex flex-shrink-0 space-x-1 items-center'>
              <p className='text-xs text-gray-500'>{text}</p>{" "}
              <div className='rounded-full h-1 w-1 bg-gray-300' />
            </div>
          ))}
        </div>
        <div className='flex mt-auto justify-between justify-self-end'>
          <div className='flex items-center gap-x-1'>
            <StarIcon className='h-4 text-pink-400' />
            <p className='text-xs '>{ratings}</p>
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-sm'>&#36;{price} /night</p>
            <p className='text-xs text-gray-500'>
              total: &#36;{props.noOfDays * price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
