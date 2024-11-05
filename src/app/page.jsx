"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import Agents from "@/components/Agents";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import '../styles/index.css';
import About from "@/components/About";

export default function Home() {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH ;
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    const fetchEventsData = async () => {
      const response = await fetch(publicPath+"/data/events.json");
      const data = await response.json();
      setEventsData(data);
    };

    fetchEventsData();
  }, []);

  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Properties/>
      <Agents/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  );
}
