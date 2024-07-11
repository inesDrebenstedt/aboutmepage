
import './index.scss';
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'


const Contact = () => {
   const [letterClass, setLetterClass] = useState('text-animate')
   const refForm = useRef()

   useEffect(() => {
     const timer = setTimeout(() => {
       setLetterClass('text-animate-hover')
     }, 4000)
     return () => {
       clearTimeout(timer)
     }
   }, [])

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs.sendForm(
         'gmail',
         '177FZ9o8u6z_9TCY8',
         refForm.current,
         '177FZ9o8u6z_9TCY8'
      )
      .then(
         () => {
            alert('Message successfully sent!')
            window.location.reload(false)
         },
         () => {
            alert('Failed to send the message. Please try again!')
         }
      )
   }

   return (
      <>
         <div className='container contact-page'>
            <div className='text-zone'>
               <h1>
                  <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
                  idx={15}
                  />
               </h1>
               <p >
               I'm excited to connect with professionals who are passionate about innovative business solutions and strategic growth opportunities. 
               <p >
               Maybe you are also eager to explore potential collaborations or career opportunities that align with your and my expertise and vision?
               </p>
               <p ></p>
               Please feel free to reach out so we can discuss how we can achieve great results together.
               </p>
               <div className='contact-form'>
                  <form ref={refForm} onSubmit={sendEmail}>
                     <ul>
                        <li className='half'>
                           <input type="text" name="nameField" placeholder="Your name" required />
                        </li>
                        <li className='half'>
                           <input type="email" name="emailField" placeholder="Your email" required />
                        </li>
                        <li className='full'>
                           <input placeholder="Subject of your message" type="text" name="subjectField" required/>
                        </li>
                        <li >
                           <textarea placeholder='Message body' name='messageField' required>  </textarea>
                        </li>
                        <li>
                           <input type="submit" className='flat-button' value="SEND"/>
                        </li>
                     </ul>
                  </form>
               </div>
            </div>
         </div>
         <Loader type="pacman" />
      </>
   )
}

export default Contact;