import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
export const ExploreNearby = ({ smallCards }) => {
  const slider = useRef(null);
  // const slider = document.querySelector(".parent");
  function slide(direction) {
    // var slider = document.getElementById('container');
    var scrollCompleted = 0;
    var slideVar = setInterval(function () {
      if (direction == "left") {
        slider.scrollLeft -= 10;
      } else {
        slider.scrollLeft += 10;
      }
      scrollCompleted += 10;
      if (scrollCompleted >= 100) {
        window.clearInterval(slideVar);
      }
    }, 50);
  }
  return (
    <section className='p-5 pt-0 parent '>
      <h1 className='font-bold text-2xl  mt-5'>Explore nearby</h1>
      <div className='overflow-x-scroll pl-5 scrollbar-none' ref={slider}>
        <div className='gap-y-3 mt-5 grid grid-cols-4 w-[1024px] '>
          {smallCards.map((card) => (
            <div className='h-24 pl-2 space-x-2 flex  items-center rounded-lg mr-2  hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out '>
              <div className='h-20  w-20 relative'>
                <Image
                  src={card.img}
                  layout='fill'
                  className='rounded-lg'
                  objectFit='cover'
                />
              </div>
              <div>
                <h4 className='text-gray-500 font-medium'>{card.name}</h4>
                <p className='text-gray-500 '>{card.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
