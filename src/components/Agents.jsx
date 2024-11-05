// // import React, { useRef } from 'react';
// // import Slider from 'react-slick';
// // import { agents } from '@/sources';
// // import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
// // import '../styles/agents.css';

// // const Agents = () => {
// //   const ref = useRef(null);
// //   const settings={
// //     infinite:true,
// //     speed:500,
// //     slidesToShow:3,
// //     centerMode:true,
// //     pauseOnHover:true,
// //     autoplay:true,
// //     autoplaySpeed:3000,
// //     centerPadding:0,
// //     responsive:[
// //       {
// //         breakpoint:900,
// //         settings:{
// //           slidesToShow:2,
// //         }
// //       },
// //       {
// //         breakpoint:600,
// //         settings:{
// //           slidesToShow:1,
// //       }
// //     },
// //     ]
// //   }
// //   return (
// //     <section id='agents'>
// //       <div className="wrapper">
// //         <h1 className="heading-1">
// //           <span className="gradient-text">Team Members</span>
// //         </h1>
// //         <Slider {...settings} className='agent-container' ref={ref}>
// //           {
// //             agents.map((agent,index)=>(
// //               <React.Fragment key={index}>
// //                 <div className="profile">
// //                   <img src={agent.profile} alt="" className="" />
// //                 </div>
// //                 <h3 className="name">{agent.name}</h3>
// //                 <p className="name">{agent.position}</p>
// //                 <div className="flex-center social-container">
// //                   {
// //                   agent.socialHandles.map((list,i)=>(
// //                     <a href={list.url} target='_blank' className='flex-center.icon-wrapper' key={i}>
// //                       {list.icon}
// //                     </a>
// //                   ))
// //           }
// //                 </div>
// //               </React.Fragment>
// //             ))
// //           }
// //         </Slider>
// //         <div className="flex-center buttons-container">
// //           <button
// //            className="flex-center btn"
// //           onClick={()=>ref.current.slickprev()}
// //           >
// //             <FaLongArrowAltLeft/>
// //           </button>
          
// //           <button className="flex-center btn"
// //           onClick={()=>ref.current.slickNext()}
// //           >
// //             <FaLongArrowAltRight/>
// //           </button>
// //         </div>
// //       </div>
// //       </section>
// //   )
// // }

// // export default Agents
// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import { agents } from '@/sources';
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
// import Image from 'next/image'; // Use Next.js Image component
// import '../styles/agents.css';

// const Agents = () => {
//   const ref = useRef(null);
  
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     centerMode: true,
//     pauseOnHover: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerPadding: 0,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section id="agents">
//       <div className="wrapper">
//         <h1 className="heading-1">
//           <span className="gradient-text">Team Members</span>
//         </h1>
//         <Slider {...settings} className="agent-container" ref={ref}>
//           {agents.map((agent, index) => (
//             <React.Fragment key={index}>
//               <div className="profile">
//                 {/* Use Next.js Image component here */}
//                 <Image src={agent.profile} alt={`${agent.name}'s profile`} width={150} height={150} className="" />
//               </div>
//               <h3 className="name">{agent.name}</h3>
//               <p className="position">{agent.position}</p>
//               <div className="flex-center social-container">
//                 {agent.socialHandles.map((list, i) => (
//                   <a href={list.url} target="_blank" rel="noopener noreferrer" className="flex-center icon-wrapper" key={i}>
//                     {list.icon}
//                   </a>
//                 ))}
//               </div>
//             </React.Fragment>
//           ))}
//         </Slider>
//         <div className="flex-center buttons-container">
//           {/* Updated method names */}
//           <button className="flex-center btn" onClick={() => ref.current.slickPrev()}>
//             <FaLongArrowAltLeft />
//           </button>
//           <button className="flex-center btn" onClick={() => ref.current.slickNext()}>
//             <FaLongArrowAltRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Agents;
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { agents } from '@/sources';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import '../styles/agents.css';

const AgentsSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="agents">
      <div className="wrapper">
        <h1 className="heading-1">
          <span className="gradient-text">Team Members</span>
        </h1>
        <Slider {...settings} className="agent-container" ref={sliderRef}>
          {agents.map((agent, index) => (
            <div key={index} className="agent-slide">
              <div className="profile">
                <Image
                  src={agent.profile}
                  alt={`${agent.name}'s profile`}
                  width={150}
                  height={150}
                  className=""
                />
              </div>
              <h3 className="name">{agent.name}</h3>
              <p className="position">{agent.position}</p>
              <div className="flex-center social-container">
                {agent.socialHandles.map((list, i) => (
                  <a
                    href={list.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-center icon-wrapper"
                    key={i}
                  >
                    {list.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex-center buttons-container">
          <button
            className="flex-center btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            className="flex-center btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgentsSlider;
