"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import TeamMemberCards from "@/components/TeamMemberCards";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import '../styles/index.css';
import About from "@/components/About";
import Events from "@/components/Events";
import { motion } from 'framer-motion';

export default function Home() {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH ;
  const [tabsData, settabsData] = useState([]);
  const [clientsData, setclientsData] = useState([]);
  const [teamMembersData, setteamMembersData] = useState([]);
  const [contactData, setcontactData] = useState([]);
  const [footerData, setfooterData] = useState([]);
  const [propertyData, setpropertyData] = useState([]);
  // const [servicesData, setservicesData] = useState([]);
  useEffect(() => {
    const fetchtabsData = async () => {
      const response = await fetch(publicPath+"/data/data.json");
      const data = await response.json();
      settabsData(data[0]);
      setclientsData(data[1]);
      setteamMembersData(data[2]);
      setcontactData(data[3])
      setfooterData(data[4]);
      setpropertyData(data[5]);
      // setservicesData(data[6]);
    };

    fetchtabsData();
  }, []);

  

  return (
    <>

      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} // This ensures it only fades in once when in view
      >
        <Navbar tabs={tabsData}/>
      </motion.nav>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Hero/>
      </motion.section>
      <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <About/>
    </motion.section>
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Services/>
    </motion.section>
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Events eventsData={propertyData}/>
    </motion.section>
    <motion.div
      className="team-cards-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 },
        },
      }}
    >
      <TeamMemberCards teamMembers={teamMembersData}/>
      </motion.div>
      <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Clients clients={clientsData}/>
    </motion.section>
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Contact/>
    </motion.section>
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Footer contactOptions={contactData} footer={footerData}/>
    </motion.footer>
      
    </>
  );
}
