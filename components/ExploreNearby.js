import Image from "next/image";

export const ExploreNearby = ({ smallCards }) => {
  return (
    <section className="p-5 pt-0  ">
      <h1 className="font-bold text-3xl  mt-5">Explore nearby</h1>
      <div className="overflow-x-scroll pl-5 scrollbar-none">
        <div className="gap-y-3 mt-5 grid grid-cols-4 w-[1024px]  ">
          {smallCards.map((card) => (
            <div className="h-24 pl-2 space-x-2 flex  items-center rounded-lg  hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out ">
              <div className="h-20  w-20 relative">
                <Image
                  src={card.img}
                  layout="fill"
                  className="rounded-lg"
                  objectFit="cover"
                />
              </div>
              <div>
                <h4>{card.name}</h4>
                <p>{card.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
