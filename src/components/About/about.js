import './about.scss';
import MyFace from '../../assets/images/MyFace.png'
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
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className='container about-page'>
        <img className='myface' src={MyFace} alt="myface" />
        <div className='text-zone'>
          <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
          </h1>
          <br />
          <p>
            With a well-rounded personality marked by resilience and a pragmatic approach for finding innovative solutions, I thrive in challenging environments.
          </p>
          <p>
            My professional approach is analytical and strategic, yet respectful and appreciative, ensuring every cooperation is both effective and mutually rewarding.
          </p>
          <p>
            I like BJJ & fitness, spending time as a volunteer in two old folks homes and I love cats.
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faJava} color="#28A4D9" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>


        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About;
