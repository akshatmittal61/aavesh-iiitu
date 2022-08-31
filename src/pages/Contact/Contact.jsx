import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import favicon from '../../images/favicon.png'
import './contact.css'

const Contact = () => {
    const [userMessage, setUserMessage] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange=(e)=>{
        const {name,value}=e?.target
        setUserMessage(p=>({
            ...p,[name]: value
        }))
    }
    const handleSubmit=(e)=>{
        e?.preventDefault()
        console.log(userMessage);
        setUserMessage({
            name: '',
            email: '',
            message: ''
        })
    }
    const handleReset=(e)=>{
        e?.preventDefault()
        setUserMessage({
            name: '',
            email: '',
            message: ''
        })
    }
  return (
    <main className='contact'>
        <h1 className='contact-head'>
            Contact Us
        </h1>
        <div className='contact-body'>
            <div className='contact-left'>
                <img src={favicon} alt='Aavesh IIITU' />
            </div>
            <div className='contact-right'>
                <form className='contact-form' onSubmit={handleSubmit} onReset={handleReset}>
                    <input type='text' name='name' placeholder='Your Name' value={userMessage.name} onChange={handleChange} />
                    <input type='email' name='email' placeholder='Your Email' value={userMessage.email} onChange={handleChange} />
                    <textarea type='text' name='message' placeholder='Your Message Here' value={userMessage.message} onChange={handleChange} rows={4}></textarea>
                    <div className='form-group'>
                    <Button text='Cancel' type='reset' variant='outline' color='black' />
                    <Button text='Send Message' type='submit' variant='filled' color='white' />
                    </div>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Contact