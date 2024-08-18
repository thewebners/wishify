import { Link } from "react-router-dom";



var Header=()=>
{
    return(
    <> 
        <header>
            <div className="header-head">
                <ul className="header-tab">
                    <li><Link className="active">Home</Link></li>
                    <li><a href={`/ewish/1/?n=Wishify`}>eWishes</a></li>
                </ul>
            </div>
        </header>
    </>
    )
}

export default Header;