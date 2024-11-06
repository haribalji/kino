import React, { useState,useEffect } from 'react';
import Teammate from './Teammate';
// import Teammate from '../../../../react-project/src/component/Teammate';
// import TeamMember from 'Teammembersection';


export default function Team(props) {
    document.title="KinowAVE-"+props.title;


    // to move of the window
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    

    const teamMembers = [
        {
          id: 1,
          name: "Brathikan V M",
          role: "Co-Founder & Simulation Engineer",
          initialImg: "./images/Brathikan V M(initial).jpg",
          hoverImg: "./images/Brathikan V M(hover).jpg",
          linkedIn: "https://www.linkedin.com/in/brathikan/"
        },
        {
          id: 2,
          name: "Janarthanan",
          role: "Co-Founder & Design Engineer",
          initialImg: "./images/Janarthananan(initial).jpg",
          hoverImg: "./images/Janarthanan(hover).jpg",
          linkedIn: "https://www.linkedin.com/in/connectwithjana/"
        },
        {
          id: 3,
          name: "Sivakeerthana S",
          role: "Control System Intern",
          initialImg: "./images/Sivakeerthana S(initial).jpg",
          hoverImg: "./images/Sivakeerthana S(hover).jpg",
          linkedIn: "https://www.linkedin.com/in/sivakeerthana/"
        },
        {
          id: 4,
          name: "Harini R",
          role: "Product Management Intern",
          initialImg: "./images/Harini R(initial).jpg",
          hoverImg: "./images/Harini R (hover).jpg",
          linkedIn: "https://www.linkedin.com/in/harini-ramesh-0483ab234/"
        },
        {
          id: 5,
          name: "Krishnan K",
          role: "System Fabrication Intern",
          initialImg: "./images/Krishnan K(initial).jpg",
          hoverImg: "./images/Krishnan K (hover).jpg",
          linkedIn: "https://www.linkedin.com/in/krisnan/"
        },
        {
          id: 6,
          name: "Kalanithi S",
          role: "Simulation Intern",
          initialImg: "./images/Kalanithi S(initial).jpg",
          hoverImg: "./images/Kalanithi S(hover).jpg",
          linkedIn: "https://www.linkedin.com/in/kalanithi-s-5167a9281/"
        },
        {
          id: 7,
          name: "Dr. Sreehaaran",
          role: "Manufacturing and Welding Expert",
          initialImg: "./images/Dr.Srihaaran(initial).jpg",
          hoverImg: "./images/Dr.Srihaaran(hover).jpg",
          linkedIn: "https://www.linkedin.com/in/dr-sreeharan-b-n-95b61a19/"
        },
        {
          id: 8,
          name: "Arun S",
          role: "Innovation Expert",
          initialImg: "./images/Arun s(initial).jpg",
          hoverImg: "./images/Arun s(hover).jpg",
          linkedIn: "https://www.linkedin.com/in/arunsvenkat/"
        }
      ];
  return (
    <div className="team-section">
      <h1 style={{ color: "#049dea" }}>Executive Team</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
            // <TeamMember/>
    <Teammate key={member.id} {...member}/>

        ))}
      </div>
    </div>
  )
}
