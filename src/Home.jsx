import React, { useState } from 'react'
import '../src/index.css';
import {Link} from 'react-router-dom';
import HelpCenter from './HelpCenter'
import Download from './Download';
import Blog from './Blog'
import Privacy from './Privacy';
import First from './images/First.png'
import Audio from './images/Audio.png'
import GoodMornImg from './images/GoodMorningMom.png';
import twoLadyHide from './images/twoLadyHide.png'
import teacup from './images/teaCup.png';
import cantWait from './images/cantwait.png';
import FourFive from './images/FourFiveImages.png'
import Videocall from './images/videoCall.png'
import speakfreely from './images/speakFreely.png'
import backgroudWhite from './images/Backgroundwhite.png'
import pausedVideo from './images/pausedvideo.png'
import Laughlady from './images/laughingLady.png'
import pebbleimg from './images/pebbleBeachimg.png'
import vegeimg from './images/vegeImg.png'
import whatsimg from './images/Qhrnh5evyPV.png'



const information = [
  {
    title: "New Ways To Enjoy WhatsApp Status",
    para: "Status is a popular way to share ephemeral updates with friends and close contacts on WhatsApp. They disappear in 24 hours and may include photos,..."
  },
  {
    title: "Connecting to WhatsApp by Proxy",
    para: "Happy New Year to everyone who uses WhatsApp! We’re mindful that just as we’ve celebrated the start to 2023 through private texts or calls, there are..."
  },
  {
    title: "Improved Calling on WhatsApp",
    para: "While WhatsApp is best known for bringing private and secure messaging to users across the world, more and more people are using WhatsApp as a way to..."
  },
  {
    title: "Avatars on WhatsApp",
    para: "Today we’re excited to bring avatars to WhatsApp, a new and personalized way to express yourself."
  },
  {
    title: "Find, Message, and Buy on WhatsApp",
    para: "Today we're sharing an update on what we’re building to help people find, message, and buy something from a business on WhatsApp. Our team is in..."
  }
]

function Home() {
  const [btnCounter, setBtnCounter] = useState(0);

  const btnPre = () => {
    if(btnCounter > 0){
    setBtnCounter(btnCounter - 1)
    console.log(btnCounter+ "pre");
    }
  }
  const btnNext = () => {
    if(btnCounter < 4){
    setBtnCounter(btnCounter + 1)
    console.log(btnCounter + "next");
    }
  }

  return (
    <div className='hoMe'>
      <div className='nav-bar'>
        <img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png"></img>
        <button>Download <i className="fa fa-download down-icon"></i> </button>
        <a href="home">WhatsApp Web</a>
        <a href="blog">Blog</a>
        <a href="helpcenter">Help Center</a>
        <a href="privacy">Privacy</a>
        <a to="/featues">Features</a>
      </div>
      <div className='twoimg'>
        <div className='goodm'>
        <img className='goodMornMsg' src={GoodMornImg}/>
        </div>
        <div className='writtenContent'>
        <div className='contentLeft'>
          <p className='firstPara'>Message <br /> privately</p><br></br>
          <p className='secondPara'>Simple, reliable, private messaging and <br />calling for free*,
            available all over the<br /> world.</p>
          <button className='btntwo'>Download <i className="fa fa-download "></i></button>
          </div>
          <div className='contentRight'>
          <img className='audio' src={Audio} />
          <img src={teacup} className="teacup"/>
          <img className='twoladies' src={twoLadyHide} >
          </img>
          <p className='emoji'> &#128525;</p> 
        </div>
        <div className='lastinImg'>
          <img className='canwait' src={cantWait} />
        </div>
        </div>
      </div>
      <div className='helloimg'>
       <img   src={First} />
      </div>
      <div className='paragraph'>
        <p>With private messaging and calling, you can be yourself,
          speak freely and feel close to the most important
          people in your life no matter where they are.</p>
      </div>
      <div className='secondhi'>
        <img src={FourFive} />
      </div>
      <div className='parawithimg'>
        <div className='leftpara'>
          <h1>Never miss a moment with voice and video calls</h1>
          <p>From a group call to classmates to a quick call with mom,
            feel like you’re
            in the same room with voice and video calls.
          </p>
          <a href="learnMore" className='rightarrow'>Learn More <i className="fa fa-angle-right "></i></a>
        </div>
        <div className='rightimg'>
          <img src={Videocall} />
        </div>
      </div>
      <div className='blackDiv'>
        <div className='leftBlock'>
          <img src={speakfreely} />
        </div>
        <div className='rightPara'>
          <h1>Speak <br /> <span>freely</span></h1>
          <p>With end-to-end encryption, your personal messages and
            calls are secured. Only you and the person you're talking to can read or listen to them,
            and nobody in between, not even WhatsApp.</p>
          <a href='learn'>Learn More<i className="fa fa-angle-right again "></i></a>
        </div>
      </div>
      <div className='divTouch'>
        <div className='imgTouch'>
          <h1>Keep in touch<br />
            with your groups</h1>
          <p>Whether it's planning an outing with friends or simply<br />
            staying on top of your family chats
            , group conversations should feel effortless.</p>
          <a href='learn'>Learn More<i className="fa fa-angle-right touchlearn"></i></a>
          </div>
          <div className='backGround'>
            <div className='imgWithback'>
            <img  className='backwhite' src={backgroudWhite}/>
          <img className='family' src={pausedVideo}></img>
          </div>
          </div>
        
      </div>
      <div className='sayFeel'>
        <div className='righTone'>
          <img className='smileGirl' src={Laughlady} />
          <img className='heartOne' src={pebbleimg} />
        </div>
        <div className='lefTone'>
          <h1>Say what<br />
            you feel </h1><br />
          <p>Express yourself without words. Use stickers and GIFs or
            share everyday moments on Status.
            Record a voice message for a quick hello or a longer story.</p>
          <a href="learnMore" className='Arrow'>Learn More <i className="fa fa-angle-right "></i></a>
        </div>
      </div>
      <div className='divVegetables'>
        <div className='picWithVege'>
          <h1>Transform
            your business</h1>
          <p>WhatsApp Business helps you reach your
            customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales,
            and build relationships all with WhatsApp.</p>
          <a className='vegeA' href="learnMore">Learn More <i className="fa fa-angle-right "></i></a>
        </div>
        <div className='paraWithVege'>
          <img src={vegeimg} />
        </div>
      </div>
      <div className='divWithSlide'>
        <div className=''>
          <h1>Connect with us</h1>
          <div className='nextPrev'>
            <button className='btnsecond' onClick={btnPre}><i className="fa fa-chevron-left"></i></button>
            <button className='btnfirst' onClick={btnNext}><i className="fa fa-chevron-right"></i></button>
          </div>
        </div>
        <div className='connnectWithUs'>
          <div className='onlyDivs'>
            {information.map((data, index) => {
              return (
                <div key={index} className={btnCounter > index ? "connectWithUshideDiv" : "firstDiv"}>
                  <i className="fa fa-whatsapp whatsAppIcon"></i>
                  <h3>{data.title}</h3>
                  <p>{data.para}</p>
                  <button className='btnInsideDiv'>Read more</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='Footer'>
        <div className='footer1div'>
          <img src={whatsimg}></img>
          <button>Download <i className="fa fa-download footer-arrow"></i> </button>
        </div>
        <div className='footer2div'> <p className='smallPara'>What we do</p>
          <h3>Features</h3>

          <h3>Blog</h3>
          <h3>Stories</h3>
          <h3>For Business</h3>
        </div>

        <div className='footer3div'> <p className='smallPara'>Who we are</p>
          <h3>About us</h3>
          <h3>Careers</h3>
          <h3>Brand Center</h3>
          <h3>h3rivacy</h3>

        </div>
        <div className='footer4div'> <p className='smallPara'>Use WhatsApp</p>
          <h3>Android</h3>
          <h3>iPhone</h3>
          <h3>Mac/PC</h3>
          <h3>WhatsApp Web</h3>

        </div>
        <div className='footer5div'><p className='smallPara'>Need help?</p>
          <h3>Contact Us</h3>
          <h3>Helhp Center</h3>
          <h3>Coronavirus</h3>
          <h3>Security Advisors</h3>

        </div>
      </div>
      <div className='lastDiv'>
        <hr className='HR'></hr>
        <div className='twothree'>
          <p>2023 © WhatsApp LLC</p>
          <p>Terms of Service</p></div>
        <div className='fass'>
          <div className='Icons'><i className="fa fa-facebook-official fafaicon"></i></div>
          <div className='Icons'><i className="fa fa-instagram fafaicon" ></i></div>
          <div className='Icons'><i className="fa fa-twitter fafaicon" ></i></div>
          <div className='Icons'><i className="fa fa-youtube-play fafaicon" ></i></div>
        </div>
        <select>
          <option>English </option>
          <option>Hindi </option>
          <option>Marathi </option>
          <option>Portugese</option>
          <option>Deutsch </option>
          <option>Italiano</option>
          <option>Suomi</option>
          <option>Eesti</option>
          <option>Francias</option>
          <option>Cestina</option>
        </select>
      </div>
    </div>

  )
}
export default Home
