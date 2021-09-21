

import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const Contact = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='d-flex' id="formPage">
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Contact Me! 
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Message</label>
                    <input
                        className='form-input'
                        type='text'
                        name='message'
                        placeholder='Your message here (:'
                        value={values.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;