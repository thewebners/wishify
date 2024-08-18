import { useState } from 'react';
import './RakshaStyle.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';


var RakshaBandhan=()=>
{
  const[openDoor] = useState('openDoor');
  const[displayNone, setDisplay] = useState(false);
  const [typeName, setTypeName] = useState();
  const [displayLoader, setDisplayLoader] = useState(false);
  const [customName, setCustomName] = useState(false);
  const [cutScroll, setCutScroll] = useState(false);
  const [opened, setOpened] = useState(false);
  const [scrollInterval, setScrollInterval] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
	const name  = queryParams.get('n');
  const navigate = useNavigate();


  var handleNavigation=async()=>
  {
    setDisplayLoader(true);
    setTimeout(()=>
      {
        navigate(`/ewish/1/?n=${typeName}`);
        stopScrollOnUserScroll();
        document.getElementById("data").scrollTop = 0;
        document.getElementById("data").scrollTop = 0;
        setDisplayLoader(false);
        setCustomName(true);
        const audio = document.getElementById('audio');
        audio.currentTime=0;
        audio.play();
      },2000)
  }

  var arrangeZIndex=()=>
  {
    setOpened(true);
    const audio = document.getElementById('audio');
    audio.play();
    setTimeout(()=>
      {
        document.getElementById("thedoor").classList.add("zIndex-0");
        scrollEffect();
      },3000)
  }


  var scrollEffect=async()=>
  {
      const totalHeight = document.getElementById("data").scrollHeight;
      const scrollStep = totalHeight / (120000 / 30);
      let goto = totalHeight - window.innerHeight;
      let currentPosition = window.scrollY;
      let interval = setInterval(() => {
        if (currentPosition < totalHeight - window.innerHeight) {
            currentPosition += scrollStep;
            document.getElementById("data").scrollTo(0,currentPosition);
        } else {
            clearInterval(scrollInterval);  // Stop when we reach the bottom
        }
      }, 16.67);
      setScrollInterval(interval);
  }

  var stopScrollOnUserScroll=async()=> {
    clearInterval(scrollInterval);
}

// document.getElementById("data").addEventListener('scroll', stopScrollOnUserScroll);

    return(
        <>

            <div className="ewish-main-panel position-relative" id='data'>
              <div className='position-absolute first-door'>
                <div className="door-opening" id='thedoor'>
                  <img className='leftdoor' src="/img/doorleft.jpg" alt="" />
                  <img className='rightdoor' src="/img/doorright.jpg" alt="" />
                  {
                    !displayNone?
                    <>
                    <div className='rakhi-thebtn'>
                      <img onClick={(e)=> {
                        document.getElementById("thedoor").classList.add("openDoor");
                        setDisplay(true);
                        arrangeZIndex();
                      }} src="/img/rakhi.png" alt="" />
                    </div>
                    </>:null
                  }
                  {
                    !displayNone?
                    <>
                    <div className="the-msg-toclick">
                      <h3>Click on the rakhi <i class="fa-solid fa-circle-down"></i></h3>
                    </div>
                    </>:null
                  }
                </div>
              </div>
              <video className='bg-vdo' src="/video/loveHeart.mp4" autoPlay loop muted>
              </video>
              <audio id="audio" src="/audio/song.mp3" loop></audio>
              <div className="overlay-bg"></div>
              {
                opened?
                <>
                  <div className="greeting-section position-absolute p-5" onClick={()=> {stopScrollOnUserScroll()}}>
                    <figure className='name'>		
                      <h1 id="name1" class="thename-decor" style={{ wordBreak:'break-word'}}>{name}</h1>
                      <h1 id="name2" class="thename-decor" style={{ wordBreak:'break-word'}}>{name}</h1>
                      <h1 id="name3" class="thename-decor" style={{ wordBreak:'break-word'}}>{name}</h1>
                      <h1 id="name4" class="thename-decor" style={{ wordBreak:'break-word'}}>{name}</h1>
                      <h1 id="name5" class="thename-decor" style={{ wordBreak:'break-word'}}>{name}</h1>
                      <h1 id="name6" class="thename-decor" style={{ wordBreak:'break-word'}}>{name}</h1>
                    </figure>
                    <h4 className='theaur-decor'>
                    की ओर से आपको
                    </h4>
                    <img className='w-100' src="/img/RB4.png" alt="" />
                    <h5 className='rakhi-wish-q'>रक्षा बंधन का त्यौहार है,<br />हर तरफ खुशियों की बौछार है,<br />बंधा एक धागे में,<br />भाई बहिन का प्यार है!</h5>
                    <img className='w-100' src="/img/RB.png" alt="" />
                    <h5 className='rakhi-wish-q mt-5'>
                      धागों से बाँधा<br />एहसास दिल के रिश्ते का,<br />
                      रिश्ता ये अपना रब की रुबाई,<br />
                      मैं रहूँ ना मैं तेरे बिना,<br />तू रहे ना तू मेरे बिना<br /></h5>
                      <img className='w-100' src="/img/RB3.png" alt="" />
                  </div>
                </>
                :null
              }
              {
                customName?
                <>
                  <div className="name-enter-section">
                    <a href={`whatsapp://send?text=${process.env.REACT_APP_URL}/ewish/1/?n=Harry %0A *${name}* जी ने आप के लिए एक Gift 🎁 भेजा है  
%0A  💁 *नीली लाइन को जल्दी छूये*`} className='sendtoall text-center'><i class="fa-brands fa-whatsapp"></i> &nbsp;<i class="fa-solid fa-hand-point-right"></i>&nbsp; सब को भेजें &nbsp;<i class="fa-solid fa-hand-point-left"></i> &nbsp;<i class="fa-brands fa-whatsapp"></i></a>
                  </div>
                </>
                :
                <>
                  <div className="name-enter-section">
                    <input className='nameInput' type="text" placeholder={`यहाँ अपना नाम लिखें` } onChange={(e)=> setTypeName(e.target.value)}/>
                    <button className='enterNamebtn' onClick={handleNavigation}><i class="fa-solid fa-hand-point-right"></i>&nbsp; देखो</button>
                  </div>
                </>
              }
              
            </div>

            {
              displayLoader?
              <>
               <div className="theloading-env">
                  <div class="loader">
                        <div class="intern">
                        </div>
                    <div class="external-shadow">
                      <div class="central">
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :null
            }
           
            
        </>
    )
}


export default RakshaBandhan;