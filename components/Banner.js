import Image from "next/image"
export const Banner = () => {
    return (
        <section className="relative h-[500px] sm:h-[400px]  xl:h-[500px]">
            <Image src="/Banner/Hero.jpg" layout="fill" objectFit="cover" objectPosition="bottom" />
            <div className="absolute text-center w-full flex-col top-1/2">
            <h3 className="font-semibold">Not sure where to go? Perfect.</h3>
            <button className="rounded-full px-7 py-4 font-black  text-purple-600 shadow-md hover:shadow-lg active:scale-90 transform transition duration-150 ease-out mt-5 select-none outline-none  bg-white">I'm flexible</button>
            </div>
        </section>
    )
}
