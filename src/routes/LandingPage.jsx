import React from "react"
import CarouselSlider from "../components/CarouselSlider.jsx"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

export default function LandingPage () {
    return (
        <div style={{borderBottom: "none"}} className="grid">
            <BecomeSpecialist />
            <PickStyle />
            <BauhausDesign />
            <OurTribute />
        </div>
    )
}

export function BecomeSpecialist() {
    return(
        <>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item">
                <h1>
                    Specialists are people who always repeat the same mistakes
                </h1>
            </div>
            <section className="item render-nested-grid">
                <div className="render-nested-item"></div>
                <div className="render-nested-item"></div>
                <div className="render-nested-item"></div>
                <div className="render-nested-item"></div>
                <div className="render-nested-item"></div>
                <div className="render-nested-item"></div>
                <div className="image-layer">
                    <img src="./images/sneaker/Nike_Shoe_Render.png" className="main-image" />
                </div>
            </section>
            <div className="item">
                <div className="image-container">
                    <img src="./images/tribute/Bauhaus_Tribute_05.png" style={ { maxWidth: "100%" } } alt="Nike Shoe Bauhaus Sneaker Image"/>
                </div>
            </div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item">
                <ScrollLink style={ { display: "contents" }}
                    to="270Models"
                    smooth={ true }
                    duration={ 600 }
                    offset={ -80 }
                >
                    <button className="btn btn-border color-blue"><span>270 Models</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g><path className="arrow-icon" d="M12 18L6 12L7.4 10.6L11 14.2V5H13V14.2L16.6 10.6L18 12L12 18Z" fill="#005AAB"/></g></svg></button>
                </ScrollLink>
                <ScrollLink style={ { display: "contents" }}
                    to="theHistory"
                    smooth={ true }
                    duration={ 1000 }
                    offset={ -80 }
                >
                    <button className="btn btn-border color-blue"><span>The History</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g><path className="arrow-icon" d="M12 18L6 12L7.4 10.6L11 14.2V5H13V14.2L16.6 10.6L18 12L12 18Z" fill="#005AAB"/></g></svg></button>
                </ScrollLink>
                <ScrollLink style={ { display: "contents" }}
                    to="ourTribute"
                    smooth={ true }
                    duration={ 1500 }
                    offset={ -80 }
                >
                    <button className="btn btn-border color-blue"><span>Our Tribute</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g><path className="arrow-icon" d="M12 18L6 12L7.4 10.6L11 14.2V5H13V14.2L16.6 10.6L18 12L12 18Z" fill="#005AAB"/></g></svg></button>
                </ScrollLink>
            </div>
            <div id="270Models" className="item"><h2>Become a specialist</h2></div>
        </>
    )
}

export function PickStyle() {
    return(
        <>
            <div className="item">
                <RouterLink to={`shop`} state={ { type: "bauhausEdContent" } }>
                    <div className="image-container">
                        <img loading="lazy" className="image-width-125 pick-style" src="./images/sneaker/Nike_Shoe_Bauhaus.jpg" alt="Nike Shoe Bauhaus Image"/>
                    </div>
                </RouterLink>
            </div>
                
                <div className="item">
                    <RouterLink to={`shop`} state={ { type: "greenEdContent" } }>
                        <div className="image-container">
                            <img loading="lazy" className="image-width-125 pick-style" src="./images/sneaker/Nike_Shoe_Green.jpg" alt="Nike Shoe Green Image"/>
                        </div>
                    </RouterLink>
                </div>
            <div className="item">
                <RouterLink to={`shop`} state={ { type: "womenEdContent" } }>
                    <div className="image-container">
                        <img loading="lazy" className="image-width-125 pick-style" src="./images/sneaker/Nike_Shoe_Bauhaus_W.jpg" alt="Nike Shoe Bauhaus Women Image"/>
                    </div>
                </RouterLink>
            </div>
            <div className="item">
                <RouterLink style={ { aspectRatio: "inherit" } } to={`shop`} state={ { type: "blueEdContent" } }>
                    <div className="image-container">
                        <img loading="lazy" className="image-width-100 pick-style" src="./images/sneaker/Nike_Shoe_Blue.jpg" alt="Nike Shoe Blue Image"/>
                    </div>
                </RouterLink>
            </div>
            <div className="item"><h2>Pick ur style</h2></div>
            <div className="item">
                <RouterLink to={`shop`} state={ { type: "whiteEdContent" } }>
                    <div className="image-container">
                        <img loading="lazy" className="image-width-100 pick-style" src="./images/sneaker/Nike_Shoe_White.jpg" alt="Nike Shoe White Image"/>
                    </div>
                </RouterLink>
            </div>
        </>
    )
}

export function BauhausDesign() {
    return(
        <>
            <div className="item"></div>
            <div className="item">
                <h2 style={{paddingTop:"10px"}}>Nike 270</h2>
                <p className="paragraph-landing">With a sleek design influenced by geometric precision and an eye-catching asymmetrical color balance, these kicks are a bold fashion statement. But it's not just about looks; the Nike 270 Bauhaus Edition also delivers on comfort, featuring Nike's renowned Air Max technology for a cushioned, responsive stride. Step into a piece of design history and make every step a work of art with these limited-edition sneakers.</p>
            </div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div id="theHistory" className="item">
                <h2>
                    <span>Bauhaus inspiring design,<br />made by </span>
                    <span style={ { color: 'var(--BAUHAUS-YELLOW, #F6BD1C)' } }>specialists</span>
                </h2>
            </div>
            <CarouselSlider />
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </>
    )
}

export function OurTribute() {
    return(
        <>
            <div className="item"></div>
            <div className="item"></div>
            <div id="ourTribute" className="item">
                <h2>Our tribute</h2>
            </div>
            <div className="item">
                <div className="text-container">
                    <h3>Amazing art pieces, right?</h3>
                    <p className="paragraph-landing">That's where we're heading too—by crafting purposeful and timeless designs that pay tribute to the creative spirit of Bauhaus, while also seamlessly enhancing people's lives. Our Nike 270 Bauhaus Edition isn't just a sneaker; it's a masterpiece in itself. We're dedicated to marrying the heritage of iconic art with the craftsmanship of a great product, making every step you take a tribute to artistry and an elevation of your style.</p>
                </div>
            </div>
            <div className="item"></div>
            <div className="item">
                <div className="image-container">
                    <img loading="lazy" className="image-width-100" src="./images/tribute/Bauhaus_Tribute_01.jpg" alt="Bauhaus tribute shoes Image"/>
                </div>
            </div>
            <div className="item"></div>
            <div className="item">
                <div className="image-container">
                    <img loading="lazy" className="image-width-100" src="./images/tribute/Bauhaus_Tribute_03.jpg" alt="Bauhaus tribute model Image"/>
                </div>
            </div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item">
                <div className="item">
                    <div className="image-container">
                        <img loading="lazy" className="image-width-100" src="./images/tribute/Bauhaus_Tribute_04.jpg" alt="Bauhaus tribute model Image"/>
                    </div>
                </div>
            </div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item">
                <div className="image-container">
                    <img loading="lazy" className="image-width-100" src="./images/tribute/Bauhaus_Tribute_02.jpg" alt="Bauhaus tribute shoe in building Image"/>
                </div>
            </div>
        </>
    )
}

