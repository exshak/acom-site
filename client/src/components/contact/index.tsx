import React, { Fragment, useState } from 'react'
import contactUs from '../../assets/images/contact-us.jpg'
import Button from '../common/button'
import FormInput from '../common/formInput'
import formSubmit from './formSubmit'
import './styles.scss'

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const { name, phone, email, message } = contactInfo

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    await formSubmit(contactInfo)
    // alert(JSON.stringify(response))

    setContactInfo({ name: '', phone: '', email: '', message: '' })
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setContactInfo({ ...contactInfo, [name]: value })
  }

  return (
    <Fragment>
      <div className='contact-image'>
        <img src={contactUs} alt='Contact Us' />
      </div>
      <div className='contact-area'>
        <h2 className='title'>Contact us</h2>
        <span>Please fill out this form and we'll get back to you shortly</span>
        <form className='contact-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            label='Name'
            required
          />
          <FormInput
            type='tel'
            name='phone'
            value={phone}
            onChange={handleChange}
            label='Phone'
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='textarea'
            name='message'
            value={message}
            onChange={handleChange}
            label='Type your message here...'
            required
          />
          <Button type='submit'>SUBMIT</Button>
        </form>
      </div>
    </Fragment>
  )
}

export default Contact
