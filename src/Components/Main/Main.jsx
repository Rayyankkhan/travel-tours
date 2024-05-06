import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img4 from '../../Assets/img4.jpg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpeg'
import img8 from '../../Assets/img8.jpg'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Upper Kachura Lake',
    location: 'Skardu',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo voluptate nulla.'

  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Lower Kachura Lake',
    location: 'Skardu',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo voluptate nulla.'

  },
  {
    id:3,
    imgSrc: img4,
    destTitle: 'Kaghan Valley',
    location: 'Mansera district',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo voluptate nulla.'

  },
  {
    id:4,
    imgSrc: img6,
    destTitle: 'Attabad Lake',
    location: 'Gilgit',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo voluptate nulla.'

  },
  {
    id:5,
    imgSrc: img7,
    destTitle: 'Sawat Valley',
    location: 'Sawat',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo voluptate nulla.'

  },
  {
    id:6,
    imgSrc: img8,
    destTitle: 'Neelum Valley',
    location: 'Naran Kaghan',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo voluptate nulla.'

  },
 
]

const Main = () => {

  //lets create a react hook to add a scroll animation...

  useEffect(()=> {
    Aos.init({duration:2000})
      }, [])

  return (
  <>
  <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right" className="title">
        Most visited destinations
      </h3>
    </div>

    <div className="secContent grid">

        {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                return (
                    <div 
                    data-aos="fade-up" 
                    key={id} 
                    className="singleDestination">


                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div> 

                        <div className="cardInfo">
                            <h4 className="destTitle">
                                {destTitle}
                            </h4>
                            <span className="continent flex ">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className="name">{location}</span>
                            </span>
                                <div className="fees flex ">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                  </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn ">
                                        Details <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                          </div>
                        
                    </div>
                )

            })
        }

    </div>
  </section>
  </>
  )
}

export default Main