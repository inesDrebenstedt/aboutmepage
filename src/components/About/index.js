import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faCss3Alt, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

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
    <div className='container about-page'>
      <div className='text-zone'>
      <h1>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['A', 'b','o','u','t',' ','m','e']} 
          idx={15}
          />
        </h1>
        <p>The quick brown fox jumps over the lazy dog</p>
        <p>Voyez ce koala fou qui mange des journaux et des photos dans un bungalow</p>
        <p>Franz jagt im komplett verwahrlosten Taxi quer durch Bayern</p>

      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faJava} color="#28A4D9"/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
          </div>
        </div>


      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About;
