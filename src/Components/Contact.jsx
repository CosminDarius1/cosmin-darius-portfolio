import React, { useRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import emailjs from 'emailjs-com'

const Contact = () => {

const [formData, setformData] = useState({
  name:'',
  email:'',
  message:''
});
const form = useRef();
const [messageSent, setMessageSent] = useState(false);

const handleChange = (e) => {
  const {name, value} = e.target;
  setformData({
    ...formData,
    [name]: value
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();
  emailjs.sendForm('service_5i35r4q','template_9k4wdad',form.current, 
    '-YIpT6TOMzk6JbUn7').then(() => {
    console.log('Success');
  }, (error) => {
    console.log('Failed...',error.text);
  },
  )
};

  return (
    <section className='bg-black py-20 align-element' id='contact'>
      <SectionTitle text='Contact'/>
      <article>
        {messageSent ? (
          <div className="text-center">
          <p className='text-green-500 text-2xl'>Message has been sent successfully</p>
          <button className="mt-3 bg-orange-500 hover:bg-slate-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => {
            setMessageSent(false);
            setformData({ name: '', email: '', message: '' });
          }}>Write Another Message</button>
        </div>
        ) : (
          <form ref={form} onSubmit={handleSubmit}>
        <div className='py-2'>
            <label htmlFor='name' className='text-orange-500 text-xl'>Name:</label>
            <input className='w-full h-8 text-lg bg-black text-slate-200 border border-slate-200 rounded' type='text' id='name' name='name' value={formData.name} onChange={handleChange} required/>
        </div>
        <div className='py-2'>
            <label htmlFor='email' className='text-orange-500 text-xl'>Email:</label>
            <input className='w-full h-8 text-lg bg-black text-slate-200 border border-slate-200 rounded' type='email' id='email' name='email' value={formData.email} onChange={handleChange} required/>
        </div>
        <div className='py-2'>
            <label htmlFor='message' className='text-orange-500 text-xl'>Message:</label>
            <textarea className='w-full h-32 text-lg bg-black text-slate-200 border border-slate-200 rounded'id='message' name='message' value={formData.message} onChange={handleChange} required/>
        </div>
        <button class="bg-orange-500 hover:bg-slate-200 text-gray-800 font-bold  py-2 px-4 rounded inline-flex items-center" type='submit' onSubmit={handleSubmit}>Send</button>
        
          </form>)}
      </article>
    </section>
  )
}

export default Contact
