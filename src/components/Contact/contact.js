import './contact.scss';
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'


const Contact = () => {
	const formLoadTime = Date.now();
	console.log('form load time: ', formLoadTime)
	const [letterClass, setLetterClass] = useState('text-animate')
	const [isMailSent, setIsMailSent] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 4000)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	const refForm = useRef();

	const sendEmail = (e) => {
		const form = e.target;
		const formData = new FormData(form);
		const company = formData.get('company');
		const name = formData.get('from_name');
		const email = formData.get('sender_email');
		const subject = formData.get('subjectField');
		const message = formData.get('message');
				
		if (company) return;
		
		const submittedTooFast = Date.now() - formLoadTime < 3000;
		if (submittedTooFast) return;

		e.preventDefault();

		emailjs
			.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_NAME, refForm.current, {
				publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
				from_name: name,
				sender_email: email,
				subjectField: subject,
				message
			})
			.then(
				() => {
					setIsMailSent(true)
					//console.log('send message time: ', Date.now())
					console.log('Message successfully sent!');
				},
				(error) => {
					console.log('Failed to send the message. Please try again!', error.text);
				},
			);

	}

	return (
		<>
			<div className='container contact-page'>
				<div className='text-zone'>
					<h1>

						<AnimatedLetters
							letterClass={letterClass}
							strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
							idx={15}
						/>

					</h1>

					<br />
					<p >
						I'm excited to connect with people who are passionate about innovative business solutions and strategic growth opportunities.
					</p>
					<p >
						Maybe you are also eager to explore potential collaborations or career opportunities that align with your and my expertise and vision?
					</p>
					<p >
						Please feel free to reach out so we can discuss how we can achieve great results together.
					</p>
					{!isMailSent &&
						<div className='contact-form'>
							<form name='myForm' ref={refForm} onSubmit={sendEmail}>
								<ul>
									<li className='half'>
										<input type="text" name="from_name" placeholder="Your name" required />
									</li>
									<li className='half'>
										<input type="email" name="sender_email" placeholder="Your email" required />
									</li>
									<li className='full'>
										<input placeholder="Subject of your message" type="text" name="subjectField" required />
									</li>
									<li >
										<textarea placeholder='Message body' name='message' required />
									</li>
									To send message, please fill out all fields.
									<li>
										<input type="submit" className='flat-button' value="SEND" />
									</li>
									<li>
										<input
											type="text"
											name="company"
											autoComplete="off"
											tabIndex="-1"
											style={{ display: 'none' }}
										/>
									</li>
								</ul>
							</form>
						</div>
					}
					{isMailSent &&
						<div className='after-contact-form'>
							<br />
							<br />
							<p style={{
								color: "#f5e022ff",
								fontSize: '24px',
							}}
							>
								Your message has been sent!
							</p>
							<input
								type="button"
								className='flat-button'
								value="Back to message form"
								onClick={() => setIsMailSent(false)}
							/>
						</div>
					}
				</div>
			</div>
			<Loader type="pacman" />
		</>
	)
}

export default Contact;