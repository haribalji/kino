// import React from 'react'
import React, { useState, useEffect } from 'react';

export default function Overview({ product }) {

  document.title="KinowAVE-"+product.name;

  
  //  [
  //     { id: 1, src: './ellergy-2.jpg', alt: 'Image 1' },
  //     { id: 2, src: './ellergy-3.jpg', alt: 'Image 2' },
  //     { id: 3, src: './ellergy-4.jpg', alt: 'Image 3' },
  // ];



  const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
    const slides = product.slides || []; // Ensure slides is always an array

    const showSlide = (index) => {
        if (index >= slides.length) {
            setDirection(-1); // Change direction to backward
            setCurrentIndex(slides.length - 1); // Go to the last slide
        } else if (index < 0) {
            setDirection(1); // Change direction to forward
            setCurrentIndex(0); // Go to the first slide
        } else {
            setCurrentIndex(index);
        }
    };

    const nextSlide = () => {
        if (direction === 1) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(currentIndex - 1);
        }
    };

    const prevSlide = () => {
        if (direction === -1) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(currentIndex - 1);
        }
    };

    // Auto slide
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [currentIndex, direction]);

  

    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
     

<div className="containermain">
      {/* Hero Section */}
      <div className="herosection">
        <div className="herosectioncontent-photo">
          <img
            src={product.img1}
            alt={product.name}
            className="image-1"
          />
        </div>
        <div className="herosectioncontent-content">
          <h2>{product.img1contentoverview}</h2>
          <div className="text">
            <p>
             
              {product.Overview }
            </p>
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="bodysection">
        <div className="bodysectioncontent">
          <h1 className="whyenergy" style={{ color: '#004a7c' }}>
            {product.Title1}          </h1>
          <p>
          {product.Title1content}
           
          </p>

        </div>

        {/* Existing Solution */}
        <div className="existingsolution">
          <h1>
            
          {product.Title2}

          </h1>
          <p>
          
            {product.Title2content}

          </p>
          <ul>
            <li><strong className="strong1">{product.listcontent.content1title}</strong> {product.listcontent.content1}</li>
            <li><strong className="strong1">{product.listcontent.content2title}</strong>  {product.listcontent.content2}</li>
            <li><strong className="strong1"> {product.listcontent.content3title}</strong> {product.listcontent.content3} </li>
            {product.listcontent.content4title&&  <li><strong className="strong1">{product.listcontent.content4title}</strong>  {product.listcontent.content4}</li>}
            {product.listcontent.content5title&&  <li><strong className="strong1">{product.listcontent.content5title}</strong>  {product.listcontent.content5}</li>}
         
            {product.listcontent.addoncontent}

          </ul>

        </div>

        {/* Our Solution */}
        <div className="oursolution">
          <h2> {product.Title3}</h2>
          <p>
          {product.Title3content}

          </p>
        </div>

        {/* Design Process */}
        <div className="oursolution">
          <h2>
          {product.Title4}
          </h2>
          <p>
          {product.Title4content}

           
          </p>
        </div>

        {/* What Sets Us Apart */}
        <div className="oursolution">
          <h2>
          {product.Title5}

          </h2>
          <p>
          {product.Title5content}
          </p>
        </div>
      </div>


      {/* slideshow presentation */}

  {product.slidephoto==1&&
//   <div class="carousel" id="imageCarousel">
//     <div class="carousel-inner">
//         <div class="carousel-item active">
//             <img src={product.slidephoto.img1 }alt="Image 1"/>
//         </div>
//         <div class="carousel-item">
//             <img src={product.slidephoto.img2 } alt="Image 2"/>
//         </div>
//         <div class="carousel-item">
//             <img src={product.slidephoto.img3 } alt="Image 3"/>
//         </div>
//     </div>
//     <button class="carousel-control carousel-control-prev" onclick="prevSlide()"> ❮ </button>
//     <button class="carousel-control carousel-control-next" onclick="nextSlide()"> ❯ </button>
// </div>
<div id="imageCarousel" className="carousel" style={{ height: '500px', overflow: 'hidden' }}>
<div className="carousel-inner" style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
    {slides.map((slide) => (
        <div className="carousel-item" key={slide.id} style={{ minWidth: '100%', height: '100%' }}>
            <img src={slide.src} className="d-block w-100" alt={slide.alt} style={{ height: '100%', objectFit: 'cover' }} />
        </div>
    ))}
</div>


</div>


}





      {/* Achievements Section */}
      <div className="Achievementssection">
        <h2>
        {product.Achievementstitle}

        </h2>
        <div className="hover-effect">
        {product.Achievementslist.Achievement1}

        </div>
        <div className="hover-effect">
        {product.Achievementslist.Achievement2}

        </div>
        <div className="hover-effect">
        {product.Achievementslist.Achievement3}

        </div>
      </div>

      {/* Partner Section */}
      <div className="ourpartersection">
        <h2>
        {product.Title6}

        </h2>
        <div className="parterimage">
          <img src={product.img6}
         alt="Partner company" className="image-5" />
        </div>
      </div>

      {/* Future Plan Section */}
      <div className="furtureplan">
        <h2>        {product.Title7}
        </h2>
        <div className="furtureplancontent">
          <p>
          {product.Title7content}

           
          </p>
        </div>
      </div>

      {/* Optional: YouTube Video */} 
       <div className="youtube-video-container">
        <iframe 
          src= {product.youtubesrc}

          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>





  </>
  );
}
