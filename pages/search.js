import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import InfoCard from "../components/InfoCard";
import React from "react";
import { useRouter } from "next/dist/client/router";
import Map from "../components/Map";

const Search = ({ infoCards }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfUsers } = router.query;
  console.log(router.query);
  const from = new Date(startDate).toDateString();
  const to = new Date(endDate).toDateString();
  return (
    <div>
      <Header location={location} noOfUsers={noOfUsers} from={from} to={to} />
      <main className=' py-0  flex'>
        <section className='py-5 px-5 md:p-8 md:pb-0 flex-grow'>
          <p className='text-xs'>
            300+ stays from {from} to {to} for {noOfUsers} guests
          </p>
          <h1 className='text-3xl font-semibold'>Stays in {location}</h1>
          <div className='flex  whitespace-nowrap flex-wrap select-none border-b pb-5'>
            <p className='button'>Cancellation flexibility</p>
            <p className='button'>Filters</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and beds</p>
          </div>
          <div className='space-y-5 mt-5 select-none '>
            {infoCards.map((info, index) => {
              return (
                <React.Fragment key={info.img}>
                  <InfoCard
                    info={info}
                    noOfDays={
                      (new Date(endDate).getTime() -
                        new Date(startDate).getTime()) /
                      (1000 * 3600 * 24)
                    }
                  />
                  <div className='border-b border-gray-300 ' />
                </React.Fragment>
              );
            })}
          </div>
        </section>
        <section className='hidden md:inline-flex md:min-w-[600px] '>
          <Map searchInfo={infoCards} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getStaticProps(context) {
  return {
    props: {
      infoCards: [
        {
          img: "/InfoCard/1.jpg",
          title: "Independant Luxary Studio Apartment",
          subtitle: "Private room in center in London",
          description: [
            "1 guest",
            "1 bedroom",
            "1 bed",
            "Wifi",
            "Kitchen",
            "Washing machone",
          ],
          ratings: 4.73,
          price: 30,
          isLiked: true,
          long: "78.387451",
          lat: "11.059821",
        },
        {
          img: "/InfoCard/2.jpg",
          title: "Luxorious Restaurant in London",
          subtitle: "Private room in center in London",
          description: [
            "1 guest",
            "1 bedroom",
            "1 bed",
            "Wifi",
            "Kitchen",
            "Washing machone",
          ],
          ratings: 3.73,
          price: 54,
          isLiked: false,
          long: "79.208824",
          lat: "17.1231841",
        },
        {
          img: "/InfoCard/3.jpg",
          title: "Baskerville House",
          subtitle: "Private room in center in London",
          description: [
            "1 guest",
            "1 bedroom",
            "1 bed",
            "Wifi",
            "Kitchen",
            "Washing machone",
          ],
          ratings: 4.73,
          price: 30,
          isLiked: true,
          long: "77.947998",
          lat: "23.473324",
        },
        {
          img: "/InfoCard/4.jpg",
          title: "Nicobar Island",
          subtitle: "London Studio Apartment",
          description: [
            "1 guest",
            "1 bedroom",
            "1 bed",
            "Wifi",
            "Kitchen",
            "Washing machone",
          ],
          ratings: 4.73,
          price: 70,
          isLiked: true,
          long: "78.387451",
          lat: "11.059821",
        },
        {
          img: "/InfoCard/5.jpg",
          title: "Excel Island ",
          subtitle: "Private room in center in London",
          description: [
            "1 guest",
            "1 bedroom",
            "1 bed",
            "Wifi",
            "Kitchen",
            "Washing machone",
          ],
          ratings: 4.73,
          price: 30,
          isLiked: true,
          long: "75.552979",
          lat: "19.601194",
        },
        {
          img: "/InfoCard/6.jpg",
          title: "House near the Mountain Hills",
          subtitle: "Private room in center in London",
          description: [
            "1 guest",
            "1 bedroom",
            "1 bed",
            "Wifi",
            "Kitchen",
            "Washing machone",
          ],
          ratings: 4.73,
          price: 30,
          isLiked: true,
          long: "78.387451",
          lat: "13.059821",
        },
        {
          img: "/InfoCard/4.jpg",
          title: "Sea view Restaurant",
          subtitle: "Private room in center in London",
          description: [
            "1 guest",
            "1 bedroom",
            "1 bed",
            "Wifi",
            "Kitchen",
            "Washing machone",
          ],
          ratings: 4.73,
          price: 30,
          isLiked: true,
          long: "76.387451",
          lat: "11.059821",
        },
        {
          img: "/InfoCard/8.jpg",
          title: "Stay at this spacious Edward House",
          subtitle: "Private room in center in London",
          description: [
            "1 guest",
            "1 bedroom",
            "1 bed",
            "Wifi",
            "Kitchen",
            "Washing machone",
          ],
          ratings: 4.73,
          price: 30,
          isLiked: true,
          long: "79.387451",
          lat: "11.059821",
        },
      ],
    },
  };
}
