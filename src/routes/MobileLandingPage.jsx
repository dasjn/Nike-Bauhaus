import React from "react"
import MobileCarouselSlider from "../components/MobileCarouselSlider.jsx"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import MobileFooter from "../components/MobileFooter.jsx"

export default function MobileLandingPage () {
    return (
        <>
            <BecomeSpecialist />
            <PickStyle />
            <BauhausDesign />
            <OurTribute />
            <MobileFooter />
        </>
    )
}

export function BecomeSpecialist() {
    return(
        <>
            <div className="mobile-parent-container">
                <div className="mobile-grid">
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item">
                        <h1>
                            Specialists are people who always repeat the same mistakes
                        </h1>
                    </div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                    <div className="mobile-item"></div>
                </div>
                <div className="mobile-image-layer">
                    <img src="./images/sneaker/Nike_Shoe_Render.png" className="mobile-main-image" />
                </div>
            </div>
            <div className="mobile-second-grid" style={{borderTop:"none"}}>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item">
                    <section className="mobile-render-nested-grid">
                        <div className="mobile-render-nested-item"></div>
                        <div className="mobile-render-nested-item"></div>
                        <div className="mobile-render-nested-item"></div>
                        <div className="mobile-render-nested-item"></div>
                    </section>
                    <div className="mobile-button-container">
                        <ScrollLink style={ { display: "contents" }}
                        to="270Models"
                        smooth={ true }
                        duration={ 600 }
                        offset={ -65 }
                        >
                            <button className="mobile-btn btn-border color-blue"><span>270 Models</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g><path className="arrow-icon" d="M8 11.9997L4 7.99967L4.93333 7.06634L7.33333 9.46634V3.33301H8.66667V9.46634L11.0667 7.06634L12 7.99967L8 11.9997Z" fill="#005AAB"/></g></svg></button>
                        </ScrollLink>
                        <ScrollLink style={ { display: "contents" }}
                            to="theHistory"
                            smooth={ true }
                            duration={ 1000 }
                            offset={ -65 }
                        >
                            <button className="mobile-btn btn-border color-blue"><span>The History</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g><path className="arrow-icon" d="M8 11.9997L4 7.99967L4.93333 7.06634L7.33333 9.46634V3.33301H8.66667V9.46634L11.0667 7.06634L12 7.99967L8 11.9997Z" fill="#005AAB"/></g></svg></button>
                        </ScrollLink>
                        <ScrollLink style={ { display: "contents" }}
                            to="ourTribute"
                            smooth={ true }
                            duration={ 1500 }
                            offset={ -65 }
                        >
                            <button className="mobile-btn btn-border color-blue"><span>Our Tribute</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g><path className="arrow-icon" d="M8 11.9997L4 7.99967L4.93333 7.06634L7.33333 9.46634V3.33301H8.66667V9.46634L11.0667 7.06634L12 7.99967L8 11.9997Z" fill="#005AAB"/></g></svg></button>
                        </ScrollLink>
                    </div>
                </div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item">
                    <div className="image-container">
                        <img src="./images/tribute/Bauhaus_Tribute_05.png" style={ { maxWidth: "100%" } } alt="Nike Shoe Bauhaus Sneaker Image"/>
                    </div>
                </div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div id="270Models" className="mobile-item"><h2>Become a<br></br>specialist</h2></div>
            </div>
        </>
    )
}

export function PickStyle() {
    return(
        <>
            <div className="mobile-third-grid" style={{borderTop:"none"}}>
                <div className="mobile-item">
                    <RouterLink to={`shop`} state={ { type: "bauhausEdContent" } }>
                        <div className="image-container">
                            <img className="image-width-125 pick-style" src="./images/sneaker/Nike_Shoe_Bauhaus.jpg" alt="Nike Shoe Bauhaus Image"/>
                        </div>
                    </RouterLink>
                </div>
                    
                    <div className="mobile-item">
                        <RouterLink to={`shop`} state={ { type: "greenEdContent" } }>
                            <div className="image-container">
                                <img className="image-width-125 pick-style" src="./images/sneaker/Nike_Shoe_Green.jpg" alt="Nike Shoe Green Image"/>
                            </div>
                        </RouterLink>
                    </div>
                <div className="mobile-item">
                    <RouterLink to={`shop`} state={ { type: "womenEdContent" } }>
                        <div className="image-container">
                            <img className="image-width-125 pick-style" src="./images/sneaker/Nike_Shoe_Bauhaus_W.jpg" alt="Nike Shoe Bauhaus Women Image"/>
                        </div>
                    </RouterLink>
                </div>
                <div className="mobile-item"><h2>Pick ur style</h2></div>
                <div className="mobile-item">
                    <RouterLink style={ { aspectRatio: "inherit" } } to={`shop`} state={ { type: "blueEdContent" } }>
                        <div className="image-container">
                            <img className="image-width-125 pick-style" src="./images/sneaker/Nike_Shoe_Blue.jpg" alt="Nike Shoe Blue Image"/>
                        </div>
                    </RouterLink>
                </div>
                <div className="mobile-item">
                    <RouterLink to={`shop`} state={ { type: "whiteEdContent" } }>
                        <div className="image-container">
                            <img className="image-width-100 pick-style" src="./images/sneaker/Nike_Shoe_White.jpg" alt="Nike Shoe White Image"/>
                        </div>
                    </RouterLink>
                </div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item">
                    <h2 style={{paddingTop:"10px"}}>Nike 270</h2>
                    <p className="paragraph-landing">With a sleek design influenced by geometric precision and an eye-catching asymmetrical color balance, these kicks are a bold fashion statement. But it's not just about looks; the Nike 270 Bauhaus Edition also delivers on comfort, featuring Nike's renowned Air Max technology for a cushioned, responsive stride. Step into a piece of design history and make every step a work of art with these limited-edition sneakers.</p>
                </div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>        
            </div>
        </>
    )
}

export function BauhausDesign() {
    return(
        <>
            <div className="mobile-fourth-grid" style={{borderTop:"none"}}>
                <div id="theHistory" className="mobile-item">
                    <h2>
                        <span>Bauhaus<br/>inspiring<br/>design,<br/> made by </span>
                        <span style={ { color: 'var(--BAUHAUS-YELLOW, #F6BD1C)' } }>specialists</span>
                    </h2>
                </div>
                <MobileCarouselSlider />
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
            </div>
        </>
    )
}

export function OurTribute() {
    return(
        <>
            <div className="mobile-fifth-grid" style={{borderTop:"none", borderBottom:"none"}}>
                <div id="ourTribute" className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item">
                    <h2>Our tribute</h2>
                </div>
                <div className="mobile-item">
                    <h3>Amazing art pieces, right?</h3>
                    <p className="paragraph-landing">That's where we're heading too—by crafting purposeful and timeless designs that pay tribute to the creative spirit of Bauhaus, while also seamlessly enhancing people's lives. Our Nike 270 Bauhaus Edition isn't just a sneaker; it's a masterpiece in itself. We're dedicated to marrying the heritage of iconic art with the craftsmanship of a great product, making every step you take a tribute to artistry and an elevation of your style.</p>
                </div>
                <div className="mobile-item">
                    <div className="image-container">
                        <img loading="lazy" className="image-width-100" src="./images/tribute/Bauhaus_Tribute_01.jpg" alt="Bauhaus tribute shoes Image"/>
                    </div>
                </div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item">
                    <div className="image-container">
                        <img loading="lazy" className="image-width-100" src="./images/tribute/Bauhaus_Tribute_03.jpg" alt="Bauhaus tribute model Image"/>
                    </div>
                </div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                
                <div className="mobile-item">
                    <div className="image-container">
                        <img loading="lazy" className="image-width-100" src="./images/tribute/Bauhaus_Tribute_04.jpg" alt="Bauhaus tribute model Image"/>
                    </div>
                </div>
                
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item"></div>
                <div className="mobile-item">
                    <div className="image-container">
                        <img loading="lazy" className="image-width-100" src="./images/tribute/Bauhaus_Tribute_02.jpg" alt="Bauhaus tribute shoe in building Image"/>
                    </div>
                </div>
            </div>
        </>
    )
}