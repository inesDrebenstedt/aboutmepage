import LogoInes from '../../assets/images/LogoInes.png';
import PageLogo from '../../assets/images/PageLogo.png';
import { Link } from 'react-router-dom';
import './index.scss';

//            //<img src={LogoInes} alt="developer"/>


const Home = () => {

   return (
      <div className="container home-page">
         <div className="text-zone">
            <h1>Hi, <br></br> I'm 
            <img src={PageLogo} alt="fullStackDeveloper"/>
            <br />
            <br />
            </h1>
            <br />
            <h2>Java / JavaScript / SQL / NoSQL / HTML / CSS</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
      </div>
   )
}

export default Home;