import React,  {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { SiTripadvisor, SiYourtraveldottv } from 'react-icons/si'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  //lets create a react hook to add a scroll animation...

  useEffect(()=> {
    Aos.init({duration:2000})
  }, [])

  return (
    <>
     <section className="footer">
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel With</h2>
            </div>

            <div className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
              <button data-aos="fade-up" className="btn flex" type='submit'>
                SEND <FiSend className='icon'/>
              </button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
             <div className="logoDiv">
              <a href="/" className="logo flex">
                <SiYourtraveldottv className='icon'/> Travel.
              </a>
              </div> 

              <div data-aos="fade-up" className="footerParagraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio unde amet perspiciatis beatae, quasi dolorem nam suscipit eligendi? Expedita unde et dolores. Magni facilis quas voluptates atque sequi, deleniti debitis!  
              </div>

              <div data-aos="fade-up" className="footerSocials flex">
               <AiOutlineTwitter className='icon'/>
               <AiFillYoutube className='icon'/>
               <AiFillInstagram className='icon'/>
               <SiTripadvisor className='icon'/>
              </div>
            </div>
            <div className="footerLinks grid">
           {/* Group one */}
              <div className="linkGroup"
              data-aos="fade-up" 
              data-aos-duration="3000" 
              >
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Payment
                </li>

              </div>
           {/* Group two */}
              <div className="linkGroup"
              data-aos="fade-up" 
              data-aos-duration="4000" >
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  TripAdvisor
                </li>

              </div>
           {/* Group three */}
              <div className="linkGroup"
              data-aos="fade-up" 
              data-aos-duration="5000" >
                <span className="groupTitle">
                  LAST MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Muree
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Sawat
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Skardu
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Gigit 
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Naran 
                </li>

              </div>
            </div>

            <div className="footerDiv">
              <small>Best Travel Theme</small>
              <small>COPYRIGHTS RESERVED - XENITH 2023 </small>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Footer