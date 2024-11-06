import React, { useState,useEffect } from "react";
import {
    
    
    Link,
  } from "react-router-dom";
export default function Product(props) {

    const [activeCard, setActiveCard] = useState(null); // Correct the naming

    const handleMouseEnter = (index) => {
      setActiveCard(index); // Use correct state setter function
    };
  
    const handleMouseLeave = () => {
      setActiveCard(null); // Reset active card when the cursor leaves
    };
  document.title="KinowAVE-"+props.title;
    const cards = [
      {
        id: 1,
        title: "Kinocil",
        description: "Kinocil is a pioneering wave energy converter that utilizes Pascal's principle and the self-leveling effect....",
        img: './Kinocil Rendered Product.jpg',
// the photos should be in public folder to render
        link: "/Kinocil",
      },
      {
        id: 2,
        title: "Ellergy",
        description: "Ellergy is a cutting-edge energy storage system that addresses the intermittent nature of renewable energy sources...",
        img: '../ellergy-1.jpg',
        link: "/Ellergy",
      },
      {
        id: 3,
        title: "Evaporative Cooler",
        description: "Cooling demand is projected to triple globally by 2050, which will significantly increase greenhouse gas emissions...",
        img: './Cooler.jpg',
        link: "/Evaporative Cooler",
      },
    ];

    // to go to the top of the page
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="projects-section">
    <h2 className="projects-title">Our Mission </h2>

<div className="cards-container">
{cards.map((card, index) => (
<div
key={card.id}
className={`card ${activeCard === index ? "active" : ""}`}
onMouseEnter={() => handleMouseEnter(index)}
onMouseLeave={handleMouseLeave}
>
<div className="card-content">
<img src={card.img} alt={card.title} className="card-image" />
<h3 className="card-title">{card.title}...</h3>
<p className="card-description">{card.description}...</p>
<Link
  to={card.link}
  className="card-button"
//   target="_blank"
//   rel="noopener noreferrer"
>
  View More
</Link>
</div>
</div>
))}
</div>
</div>

    
  )
}
