export default function Services() {
  
  return (
    <div className="flex flex-col items-center justify-center text-center bg-black py-12 w-full mb-8" style={{borderRadius:"20px"}}>
    <div className="bg-black py-12 w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wide shadow-lg bg-gradient-to-r bg-white bg-clip-text text-transparent">
          Services GDG-BU
        </h1>
    </div>
    <main>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="page-content p-8 md:p-10 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 border-blue-400 pb-2">
            Workshops and Hands-On Coding Labs
            
            </h2>
            <div className="text-lg leading-relaxed">Dive deep into the latest Google technologies and industry tools through hands-on workshops.We cover topics like Android development, Firebase integration, cloud computing, AI/ML, and web development.</div>
          </div>
          <div
            className="page-content p-8 md:p-10 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 border-blue-400 pb-2">
            Tech Talks and Guest Speakers      
            </h2>
            <div className="text-lg leading-relaxed">Learn from the experts! We host industry leaders, Google Developer Experts (GDEs), and alumni working at top tech companies who share insights into tech trends, career growth, and real-world applications of emerging technologies.</div>
          </div>
          <div
            className="page-content p-8 md:p-10 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 border-blue-400 pb-2">
            Mentorship and Networking Opportunities
            </h2>
            <div className="text-lg leading-relaxed">Connect with mentors in your field of interest, including faculty, alumni, and industry professionals. Our mentorship programs are designed to provide personalized guidance, career advice, and networking support.     </div>
          </div>
        </section>
    </main>
    </div>
  );
}
