import React, {useEffect} from 'react'
import './home.css'
// import video from '../../Assets/video.mp4'
// import video2 from '../../Assets/video2.mp4'
import video from '../../Assets/video.mp4'
import {CiLocationOn} from "react-icons/ci"
import {FiFilter, FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {TbApps} from "react-icons/tb"
import {BsListTask} from "react-icons/bs"
import {SiTripadvisor} from "react-icons/si"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  //lets create a react hook to add a scroll animation...

  useEffect(()=> {
    Aos.init({duration:2000})
  }, [])




  return (
    <>
     <section className='home'>
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1  data-aos="fade-up" className="homeTitle">
            Search Your Holidays
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search For Destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...' />
              <CiLocationOn className="icon"/>

             
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your Date:</label>
            <div className="input flex">
              <input type="date"  />
            </div>
          </div>
        
          <div className="priceInput">
            <div className="label_total flex">
            <label htmlFor="price">Max Price</label>
              <h3 className="total">
                $6000
              </h3>
            </div>
            <div className="input flex">
              <input type="range" max="50000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <FiFilter className="icon"/>
            <span>More Filters</span>

          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcon flex">
          <div className="rightIcons">
          <FiFacebook className="icon"/>
           <AiOutlineInstagram className="icon"/>
           <SiTripadvisor className="icon"/>
          </div>
          <div className="leftIcons" >
            <BsListTask className="icon"/>
           <TbApps className="icon"/>
          </div>
        </div>
      </div>
      </section> 
    </>
  )
}

export default Home