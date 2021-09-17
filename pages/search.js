import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import InfoCard from "../components/InfoCard";
import React from "react";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

const Search = ({ infoCards }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfUsers } = router.query;
  // console.log(router.query);
  // const from = format(new Date(startDate), "dd MMM YYYY");
  // const to = format(new Date(endDate), "dd MMM YYYY");
  return (
    <div>
      <Header location={location} noOfUsers={noOfUsers} />
      <div className='p-5 md:p-8'>
        <p className='text-xs'>
          300+ stays from 22 Oct to 12 Sep for {noOfUsers} guests
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
                <InfoCard info={info} />
                <div className='border-b border-gray-300 ' />
              </React.Fragment>
            );
          })}
        </div>
      </div>
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
        },
        {
          img: "/InfoCard/2.jpg",
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
          ratings: 3.73,
          price: 54,
          isLiked: false,
        },
        {
          img: "/InfoCard/3.jpg",
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
        },
        {
          img: "/InfoCard/4.jpg",
          title: "Stay at this spacious Edward House",
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
        },
        {
          img: "/InfoCard/5.jpg",
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
        },
        {
          img: "/InfoCard/6.jpg",
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
        },
        {
          img: "/InfoCard/4.jpg",
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
        },
      ],
    },
  };
}
