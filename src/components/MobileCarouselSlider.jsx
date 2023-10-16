import React, { useRef } from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function MobileCarouselSlider() {
    
    const sliderSettings = { 
        infinite: true, // Infinite looping
        speed: 300, // Animation speed
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
            <section className="mobile-item mobile-carousel-container">
                <Slider ref={sliderRef} {...sliderSettings}>
                {items.map((item, index) => (
                    <div key={index}>
                    <section  className="mobile-carousel-nested-grid">
                        <div className="mobile-carousel-nested-item">
                            <section className="medium-textbox">
                                <h3>{item.title}</h3>
                                <p className="paragraph-landing">{item.description}</p>
                            </section>
                        </div>
                        <div className="mobile-carousel-nested-item">
                            <div className="image-container">
                                <img className="image-width-125" src={item.imageSrc1} alt={item.title} />
                            </div>
                        </div>
                        <div className="mobile-carousel-nested-item">
                            <div className="image-container">
                                <img className="image-width-100" src={item.imageSrc2} alt={item.title} />
                            </div>
                        </div>
                        <div className="mobile-carousel-nested-item">
                            <div className="image-container">
                                <img className="image-width-100" src={item.imageSrc3} alt={item.title} />
                            </div>
                        </div>
                    </section>
                    </div>
                ))}
                </Slider>

                <section className="item mobile-carousel-buttons">
                    <button onClick={prevSlide} id="backSlideButton" className="mobile-btn btn-border color-blue" style={ { backgroundColor: "var(--BG-GREY, #F7F7F7)", marginRight: "10px" } }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g>
                                <path className="arrow-icon" d="M6.66797 12L2.66797 8L6.66797 4L7.6013 4.96667L5.23464 7.33333H13.3346V8.66667H5.23464L7.6013 11.0333L6.66797 12Z" fill="#005AAB"/>
                            </g>
                        </svg>
                    </button>
                    <button onClick={nextSlide} id="nextSlideButton" className="mobile-btn btn-border color-blue" style={ { backgroundColor: "var(--BG-GREY, #F7F7F7)" } }>
                        <span className="button-text">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g>
                                <path className="arrow-icon" d="M9.33463 12L8.4013 11.0333L10.768 8.66667H2.66797V7.33333H10.768L8.4013 4.96667L9.33463 4L13.3346 8L9.33463 12Z" fill="#005AAB"/>
                            </g>
                        </svg>
                    </button>
                </section>
            </section>
        </>
    )
}