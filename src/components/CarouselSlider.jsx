import React, { useRef } from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function MobileCarouselSlider() {
    
    const sliderSettings = { 
        infinite: true, // Infinite looping
        speed: 1000, // Animation speed
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        arrow: false
    };

    const sliderRef = useRef();

    const prevSlide = () => {
      sliderRef.current.slickPrev();
    };
  
    const nextSlide = () => {
      sliderRef.current.slickNext();
    };

    const items = [
        // Define your content items here
        {
            title: "Wassily Chair, 1925",
            description: "Iconic piece of modernist furniture. It features a tubular steel frame and canvas or leather upholstery. This chair is a testament to the Bauhaus's exploration of materials and form.",
            imageSrc1: "./images/bauhaus/Bauhaus_Item_01.jpg",
            imageSrc2: "./images/bauhaus/Bauhaus_Item_02.jpg",
            imageSrc3: "./images/bauhaus/Bauhaus_Item_03.jpg",
        },
        {
            title: "Wagenfeld lamp, 1924",
            description: "It embodies the essential idea that form follows function, as espoused by the influential Bauhaus school. Wilhelm Wagenfeld created in 1924 one of the most iconic lamps of the 20th century, which is known as the Bauhaus or Wagenfeld Lamp.",
            imageSrc1: "./images/bauhaus/Bauhaus_Item_04.jpg",
            imageSrc2: "./images/bauhaus/Bauhaus_Item_05.jpg",
            imageSrc3: "./images/bauhaus/Bauhaus_Item_06.jpg",
        },
        {
            title: "Bauhaus Building, 1926",
            description: "Designed by Walter Gropius in 1925-1926, is an architectural masterpiece that embodies the Bauhaus principles of functionality and minimalism. It served as the school's headquarters and is now a UNESCO World Heritage site.",
            imageSrc1: "./images/bauhaus/Bauhaus_Item_07.jpg",
            imageSrc2: "./images/bauhaus/Bauhaus_Item_08.jpg",
            imageSrc3: "./images/bauhaus/Bauhaus_Item_09.jpg",
        },
        {
            title: "Nesting Tables, 1927",
            description: "Inspired by Josef Albers feature geometric elegance and a harmonious interplay of shapes and colors. These tables, influenced by Albers' renowned color theory, combine striking visuals with functional versatility, showcasing his commitment to form, color, and functionality.",
            imageSrc1: "./images/bauhaus/Bauhaus_Item_10.jpg",
            imageSrc2: "./images/bauhaus/Bauhaus_Item_11.jpg",
            imageSrc3: "./images/bauhaus/Bauhaus_Item_12.jpg",
        },
    ];

    return(
        <>
            <section className="item carousel-container">
                <Slider ref={sliderRef} {...sliderSettings}>
                {items.map((item, index) => {
                    return(
                        <div key={index}>
                        <section  className="carousel-nested-grid">
                            <div className="carousel-nested-item">
                                <section className="medium-textbox">
                                    <h3>{item.title}</h3>
                                    <p className="paragraph-landing">{item.description}</p>
                                </section>
                            </div>
                            <div className="carousel-nested-item"></div>
                            <div className="carousel-nested-item">
                                <div className="image-container">
                                    <img className="image-width-125" src={item.imageSrc1} alt={item.title} />
                                </div>
                            </div>
                            <div className="carousel-nested-item">
                                <div className="image-container">
                                    <img className="image-width-100" src={item.imageSrc2} alt={item.title} />
                                </div>
                            </div>
                            <div className="carousel-nested-item">
                                <div className="image-container">
                                    <img className="image-width-100" src={item.imageSrc3} alt={item.title} />
                                </div>
                            </div>
                        </section>
                        </div>
                    )
                })}
                </Slider>

                <section className="item carousel-buttons">
                    <button id="backSlideButton" className="btn btn-border color-blue" onClick={prevSlide} style={ { backgroundColor: "var(--BG-GREY, #F7F7F7)", marginRight: "20px" } }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path className="arrow-icon" d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="#005AAB"/>
                            </g>
                        </svg>
                    </button>
                    <button id="nextSlideButton" className="btn btn-border color-blue" onClick={nextSlide} style={ { backgroundColor: "var(--BG-GREY, #F7F7F7)" } }>
                        <span className="button-text">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path className="arrow-icon" d="M14 18L12.6 16.55L16.15 13L4 13V11L16.15 11L12.6 7.45L14 6L20 12L14 18Z" fill="#005AAB"/>
                            </g>
                        </svg>
                    </button>
                </section>
            </section>
        </>
    )
}