import React, { useEffect, useState } from 'react'
import '../src/index.css';
import {Link} from 'react-router-dom';
import HelpCenter from './HelpCenter'
import Download from './Download';
import Blog from './Blog'
import Privacy from './Privacy';

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
    // console.log("previous");
    console.log(btnCounter+ "pre");
    }
  }
  const btnNext = () => {
    // console.log("next")
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
          <img src=''></img>
        </div>
        <div className='writtenContent'>
          <p className='firstPara'>Message <br /> privately</p>
          <p className='secondPara'>Simple, reliable, private messaging and <br />calling for free*,
            available all over the<br /> world.</p>
          <button className='btntwo'>Download <i className="fa fa-download "></i></button>
          <img className='audio' src='https://scontent.whatsapp.net/v/t39.8562-34/319012896_425159346360681_5365263553412164973_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=xDVZ939gg7UAX8o5bbn&_nc_ht=scontent.whatsapp.net&oh=01_AdSYvVWjmmlWEUz8bXUzQK7VCtYcvfLbJWJddSBeKSuAgw&oe=63E7FD88' />
          <img className='twoladies' src='https://scontent.whatsapp.net/v/t39.8562-34/318653358_1119864552007486_249294869100988162_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=HJLQoGgy624AX8QDUKx&_nc_ht=scontent.whatsapp.net&oh=01_AdSnus1eOK-pKpvU3TzTKd9nWDLTuBl9ryrfLMKBEUJSMg&oe=63E69CB1' >
          
          </img>
          <p className='emoji'> &#128525;</p> 
        </div>
        <div className='lastinImg'>
          <img src='https://scontent.whatsapp.net/v/t39.8562-34/323914620_1571722909934742_4947035793330347072_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=oDYLlrSPDAwAX_8vb6C&_nc_ht=scontent.whatsapp.net&oh=01_AdTRemlQwg50picY6VFO-QiM7W9aEWO84TtT_c-ULJRCKQ&oe=63E6AEC8' />
        </div>
      </div>
      <div className='helloimg'>
        <img src='https://scontent.whatsapp.net/v/t39.8562-34/315574582_669241857978207_6336028129238262344_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=f8oWS8gS-0cAX96L-YQ&_nc_oc=AQlj-TFC5RcWGG8MBHj0Bix5lq7ZG6h9FRBtppUTXIoSQtfgtr15Ij6OcMpKrpteGBM&_nc_ht=scontent.whatsapp.net&oh=01_AdQstxUQLO5CqGxNSF-F1bs_h9JXWqWt8rJGyKEsn-IsXA&oe=63E6938C' />
      </div>
      <div className='paragraph'>
        <p>With private messaging and calling, you can be yourself,
          speak freely and feel close to the most important
          people in your life no matter where they are.</p>
      </div>
      <div className='secondhi'>
        <img src='https://scontent.whatsapp.net/v/t39.8562-34/315632381_5616928641708856_9210500231334849736_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=NgqpBei4iHIAX9GJ06v&_nc_ht=scontent.whatsapp.net&oh=01_AdTJz4ZjIKWD-R_4OROdbUmylbSdegJ3q2cfJy1Hh8P_pw&oe=63E7524D' />
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
          <img src='https://scontent.whatsapp.net/v/t39.8562-34/316211879_640016534274402_8272733547019635528_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=VacO-KmD9PYAX_GY6bh&_nc_ht=scontent.whatsapp.net&oh=01_AdRS8-i4YGd3E1WzuP0qw-UaxlncLNlyyjTCMCOnEeY59A&oe=63E82316' />
        </div>
      </div>
      <div className='blackDiv'>
        <div className='leftBlock'>
          <img src='https://scontent.whatsapp.net/v/t39.8562-34/316036583_870096634427722_4468595013887544943_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=w2p_0yfJpEkAX9achlO&_nc_ht=scontent.whatsapp.net&oh=01_AdTQJwlozPMyZFmtHzABfMEaDWhuWdkDYmnHp1H_ldi7Vg&oe=63E7AA71' />
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
            , group conversations <br />should feel effortless.</p>
          <a href='learn'>Learn More<i className="fa fa-angle-right touchlearn"></i></a>
          <div className='backGround'>
            <div className='imgWithback'></div>
            <img className='imgwithcell' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRcONR8dI2Y34coDbswxjtfsNmV9TG-SptyBBBJeOv_raTfyxvT'></img>
            <img className='family' src="https://scontent.whatsapp.net/v/t39.8562-34/311769771_534650495159504_5541131595462341036_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=CfGEfPhfSmUAX_F3tm-&_nc_ht=scontent.whatsapp.net&oh=01_AdTyMc8T_TEqC3WcalK3l-b1WbgP7A6A8BDEmpD3Mzzg5Q&oe=63E90380"></img>
          </div>
        </div>
      </div>
      <div className='sayFeel'>
        <div className='righTone'>
          <img className='smileGirl' src='https://scontent.whatsapp.net/v/t39.8562-34/317083769_795673198165216_6941067459072265627_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=NEfX2W7xKFoAX_dH3Da&_nc_oc=AQkxYPTZwHiJ2ERK7umXPnZ4nhmcFTmpNiuAEuH-knbuHcgnoaEmCUzSIcaSbL7oQtnuMYYfqus7hhmQ7kVxVjLz&_nc_ht=scontent.whatsapp.net&oh=01_AdQ-BxNzn4VHnut2oqbim8Xx5Lz189om-7v4qofaqMBXJA&oe=63E8BF2E' />
          <img className='heartOne' src='https://scontent.whatsapp.net/v/t39.8562-34/312201775_3436222206622878_5992065132121718104_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=_Bxyu3usCWoAX_0qdeB&_nc_ht=scontent.whatsapp.net&oh=01_AdTgoNVO4aiZ3lYZpcNckwrJa9QMda6cluaC3AeiGB1dyQ&oe=63E92496' />
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
          <img src='https://scontent.whatsapp.net/v/t39.8562-34/318716890_590436546220129_8444143897573501384_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=VrZrs-EgMS0AX9YSk5-&_nc_ht=scontent.whatsapp.net&oh=01_AdRSJdm2140MrrBCVdOeW_UDuuVC7WAsKfKtsybh-xxadA&oe=63E9D38C' />
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
          <img src='https://static.whatsapp.net/rsrc.php/v3/yJ/r/Qhrnh5evyPV.png'></img>
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