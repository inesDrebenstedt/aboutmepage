
import SidebarLogoCircle from '../../assets/images/SidebarLogoCircle.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import CatLoader from '../CatLoader/catloader.js';
import './home.scss';

const Home = () => {
   const [letterClass, setLetterClass] = useState('text-animate')
   //const greetingArray = ["H", "i", ","];
   const nameArray = [" ", "I", "n", "e", "s"];
   const roleTitleArray = [" ", "F", "u", "l", "l", "s", "t", "a", "c", "k", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r",];

   useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
      return () => {
        clearTimeout(timer)
      }
    }, [])

   return (
      <>
      <CatLoader />
      <div className="container home-page">
      <img className="logo-img" src={SidebarLogoCircle} alt="fullStackDeveloper"/>
      <br />
         <div className="text-zone">
            <h1>
               <span className={[letterClass].join('animatedLetter')}>H</span>    
               <span className={`$letterClass _12`}>i,</span>                          
               <br /> 
               <span className={`$letterClass _13`}>I</span>   
               <span className={`$letterClass _14`}>'m</span>   
               <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>  
               <br />             
               <AnimatedLetters letterClass={letterClass} strArray={roleTitleArray} idx={19}/>                          
               <br />
               <br />
            </h1>

            <br />
            <br />
            <br />
            <h2>Java / JavaScript / SQL / NoSQL / HTML / CSS</h2>
            <Link to="contact" className='flat-button'>CONTACT ME</Link>
            </div>
            
      </div>
      
      </>
   )
}

export default Home;