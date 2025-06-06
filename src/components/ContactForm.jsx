import React, { useState } from 'react';
import styles from '../pages/Common.module.css';
import SendButton from './SendButton';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
const public_Key = import.meta.env.VITE_PBKey;
const template_Key = import.meta.env.VITE_TMKey;
const service_Key = import.meta.env.VITE_SEKey;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      service_Key, // replace with your actual service ID
      template_Key, // replace with your actual template ID
      {
        name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      public_Key // replace with your actual public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    })
    .catch((error) => {
      console.error('Email sending error:', error.text);
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid place-items-start p-[2%] w-[100%] text-slate-100 ${styles.form} font-BrunoAce`}
    >
      <label htmlFor="name" className={`p-[1%]`}>Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full rounded-md p-[1%] bg-slate-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
      <label htmlFor="email" className={`p-[1%]`}>Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full rounded-md p-[1%] bg-slate-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
      <label htmlFor="message" className={`p-[1%]`}>Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        maxLength={600}
        className="resize-y min-h-32 w-full rounded-md p-[1%] bg-slate-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
      <SendButton onSubmit={() => handleSubmit()} />
    </form>
  );
};

export default ContactForm;
