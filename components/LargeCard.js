import Image from "next/image";

export const LargeCard = ({ img }) => {
  return (
    <div className='rounded-2xl m-10 sm:mx-auto bg-black sm:mx-5 cursor-pointer sm:flex sm:bg-transparent relative'>
      <div className='text-white text-center px-20 pt-10 pb-20 sm:text-white sm:text-left sm:absolute sm:left-0 sm:z-20'>
        <h1 className='text-3xl pb-2'>Try hosting</h1>
        <p className='text-sm pb-2 sm:max-w-[300px]'>
          Earn extra income and unlock new opportunities by sharing your space.
        </p>
        <button className='px-5 py-2 text-black hover:bg-black hover:text-white transition transform duration-300 ease-in-out bg-white rounded-xl my-2'>
          Learn more
        </button>
      </div>
      <div className='relative h-72  w-full'>
        <Image
          src={img}
          layout='fill'
          className='rounded-b-2xl sm:rounded-2xl'
          objectFit='cover'
          objectPosition='right'
        />
      </div>
    </div>
  );
};
