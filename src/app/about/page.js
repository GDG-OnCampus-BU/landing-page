"use client";

import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Home() {
    const scrollToSection = () => {
        const section = document.getElementById("more-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            window.scrollBy({
              top: -65,
              behavior: "smooth",
            });
          }, 800);
        }
      };
    useEffect(()=>{
        setTimeout(()=>{
            scrollToSection();
        },1700)
    },[])
    const Section = ({ title, content }) => (
        <section className="more-section mb-12 rounded-lg overflow-hidden" style={{marginLeft:'50px',marginRight:'50px'}}>
          <div
            className="page-content p-8 md:p-16 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 border-blue-400 pb-2">
              {title}
            </h2>
            <div className="text-lg leading-relaxed">{content}</div>
          </div>
        </section>
      );

      const sectionsData = [
        {
          title: "Who We Are",
          content: (
            <p>
              Google Developer Group BU (GDG-BU) is a community of students,
              developers, and tech enthusiasts at Boston University, all with a
              passion for learning, building, and sharing. We connect individuals
              interested in Google's developer technology, providing a platform for
              networking, learning, and collaboration.
            </p>
          ),
        },
        {
          title: "Our Mission",
          content: (
            <>
              <p>
                Our mission at GDG BU is to empower our members to grow as developers,
                to foster a spirit of innovation and problem-solving, and to provide a
                collaborative environment that promotes learning and mentorship.
              </p>
              <p className="mt-4">
                Through hands-on workshops, talks by industry experts, and
                project-based learning, we aim to bridge the gap between academic
                knowledge and industry skills, preparing members for successful
                careers in technology.
              </p>
            </>
          ),
        },
        {
          title: "What We Do",
          content: (
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Workshops & Hackathons:</strong> Hands-on coding workshops,
                hackathons, and coding challenges.
              </li>
              <li>
                <strong>Guest Speaker Sessions:</strong> Talks from professionals in
                tech, including Google engineers and developers.
              </li>
              <li>
                <strong>Networking Opportunities:</strong> Events that connect
                students and professionals, helping build a strong tech network.
              </li>
              <li>
                <strong>Mentorship Programs:</strong> Pairing members with mentors who
                guide them in their tech journey.
              </li>
            </ul>
          ),
        },
        {
          title: "Join GDG BU",
          content: (
            <>
              <p>
                Interested in becoming part of GDG BU? Whether you're new to tech or a
                seasoned developer, our community welcomes you! Join us to learn,
                connect, and grow in a supportive environment. Check out our upcoming
                events, and feel free to reach out to us with any questions.
              </p>
              <p className="mt-4">
                Follow us on social media to stay updated with our latest events and
                announcements.
              </p>
            </>
          ),
        },
      ];
  return (
    <>
    <Navbar />
      <div
      id="fixed-image"
      className="fixed top-[-10] left-0 w-full h-full z-[-1] bg-cover bg-center opacity-40"
      style={{
        backgroundImage: "url('https://gdg-oncampus-bu.github.io/landing-page/assets/image1.png')",
        backgroundRepeat:"none",
        backgroundSize:"cover",
      }}
    ></div>

    <main>
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wide shadow-lg bg-gradient-to-r bg-white bg-clip-text text-transparent">
          <button onClick={scrollToSection}>About GDG-BU</button>
        </h1>
    </div>

    <div id="more-section">
        {sectionsData.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
        ))}
    </div>
    </main>
  </>
  );
}
