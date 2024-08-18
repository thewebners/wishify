import { Link } from "react-router-dom";



var Home=()=>
{
    return(
        <>
            <section className="Landing-page-section-one">
                <div className="inner-landing-one">
                    <h2>
                    Magical wishes <i class="fa-solid fa-wand-magic-sparkles"></i> , anytime, anywhere 
                    </h2>
                    <div className="flex gap-3 align-items-center">
                    <a href={`/ewish/1/?n=Wishify`} className="go-eWishes-btn">Rakhi eWishes <i className="fa-solid fa-arrow-right"></i></a>
                    {/* <Link className="go-eWishes-btn">Festival eWishes <i className="fa-solid fa-arrow-right"></i></Link> */}
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home;