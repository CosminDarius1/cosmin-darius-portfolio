import React, { useState } from 'react'
import SectionTitle from './SectionTitle'

const Contact = () => {

const [formData, setformData] = useState({
  name:'',
  email:'',
  message:''
});

const handleChange = (e) => {
  const {name, value} = e.target;
  setformData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
}

  return (
    <section className='bg-black py-20 align-element' id='contact'>
      <SectionTitle text='Contact'/>
      <article>
          <form onSubmit={handleSubmit}>
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
        <button class="bg-orange-500 hover:bg-slate-200 text-gray-800 font-bold  py-2 px-4 rounded inline-flex items-center" type='submit'>Send</button>
          </form>
      </article>
    </section>
  )
}

export default Contact
