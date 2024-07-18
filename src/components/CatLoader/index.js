import './catloader.scss'
import React, {useState, useEffect} from 'react'
import NyanCatGif from '../../assets/images/nyancat.gif'


const CatLoader = () => {

   const [top, setTop] = useState(0);

   useEffect(() => {
     const handleResize = () => {
       const Logo = document.querySelector('.logo-img');
       if (Logo) {
         setTop(Logo.clientHeight);
       }
     };
 
     // Set initial position
     handleResize();
 
     // Add resize event listener
     window.addEventListener('resize', handleResize);
 
     // Cleanup event listener on component unmount
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);
   
      return (
      <div className='catLoaderContainer' style={{ top: `${top}px` }}>

      <img src={NyanCatGif} alt="Loading..." className='nyanCatGif' />

   </div>
   );
}

export default CatLoader;