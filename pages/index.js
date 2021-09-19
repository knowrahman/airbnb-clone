import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { ExploreNearby } from "../components/ExploreNearby";
import { LiveAnywhere } from "../components/LiveAnywhere";
import { LargeCard } from "../components/LargeCard";
import { Footer } from "../components/Footer";
import React, { useEffect } from "react";
import Popup from "reactjs-popup";
// import Popup from "react-popup";
export default function Home({ smallCards, mediumCards }) {
  useEffect(() => {
    // Popup.alert("This is a dummy UI clone of anrbob website");
    // Popup.alert("I am alert, nice to meet you");
  }, []);
  return (
    <div className=''>
      <Head>
        <title>anrbob-ui-clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className=''>
        <Banner />
        <div className='max-w-[1080px]   mx-auto'>
          <ExploreNearby smallCards={smallCards} />
          <LiveAnywhere mediumCards={mediumCards} />
          <LargeCard img={"/LargeCard/1.jpg"} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      smallCards: [
        {
          name: "Hyderabad",
          img: "/ExploreNearby/1.webp",
          duration: "15-min drive",
        },
        {
          name: "Nagpur",
          img: "/ExploreNearby/2.webp",
          duration: "6-hour drive",
        },
        {
          name: "Tirupati",
          img: "/ExploreNearby/3.webp",
          duration: "10-min drive",
        },
        {
          name: "Aurangabad",
          img: "/ExploreNearby/4.webp",
          duration: "5-min drive",
        },
        {
          name: "Hampi",
          img: "/ExploreNearby/5.webp",
          duration: "2 hours drive",
        },
        {
          name: "Kashmir",
          img: "/ExploreNearby/6.webp",
          duration: "58-min drive",
        },
        {
          name: "Kolkata",
          img: "/ExploreNearby/7.webp",
          duration: "21-min drive",
        },
        {
          name: "Delhi",
          img: "/ExploreNearby/8.webp",
          duration: "10-min drive",
        },
      ],
      mediumCards: [
        { title: "Outdoor getaway", img: "/LiveAnywhere/1.jpg" },
        { title: "Unique stays", img: "/LiveAnywhere/2.jpg" },
        { title: "Entire homes", img: "/LiveAnywhere/3.jpg" },
        { title: "Pets allowed", img: "/LiveAnywhere/4.jpg" },
      ],
    },
  };
}
