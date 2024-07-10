import './index.scss'
import React from 'react'
import NyanCatGif from '../../assets/images/nyancat.gif'

const CatLoader = () => {
      return (
      <div className='catLoaderContainer'>

      <img src={NyanCatGif} alt="Loading..." className='nyanCatGif' />

   </div>
   );
}

export default CatLoader;