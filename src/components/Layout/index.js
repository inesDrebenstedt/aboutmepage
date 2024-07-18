
import './layout.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';


const Layout = () => {

   return  (
   <div className="App">
    <Sidebar />
      <div className='page'>
      <span className='tags top-tag-html'>&lt;html&gt;</span>
         <span className='tags top-tag-body'>&lt;body&gt;</span>
         <Outlet />
         <span className='tags bottom-tag-body'>&lt;/body&gt;</span>
            <br />        
         <span className='tags bottom-tag-html'>&lt;/html&gt;</span>
         
      </div>
   </div>
   )

   
}

export default Layout