import Image from "next/image";

export const LiveAnywhere = ({ mediumCards }) => {
  return (
    <section className='p-5 pt-0  '>
      <h1 className='font-bold text-2xl  mt-5'>Live Anywhere</h1>
      <div className='overflow-x-scroll pl-5 scrollbar-none'>
        <div className='mt-5 grid grid-cols-4 w-[1024px]  '>
          {mediumCards.map((card) => (
            <div className=' gap-x-1 rounded-lg   hover:scale-90 transition transform duration-150 ease-out '>
              <div className='h-60 w-60 relative'>
                <Image
                  src={card.img}
                  layout='fill'
                  className='rounded-lg'
                  objectFit='cover'
                />
              </div>
              <h4 className='text-gray-700 text-md font-medium'>
                {card.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
