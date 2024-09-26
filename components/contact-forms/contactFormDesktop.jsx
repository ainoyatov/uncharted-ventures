'use client';

import React from 'react';
import {useForm} from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

const ContactFormDesktop = () => {

    const {register, handleSubmit, reset} = useForm();
    const [captcha, setCaptcha] = useState(null);
    const [isToggled, setIsToggled] = useState(false);

    const onSubmit = async (data) => {
        // const fname = data.get('name')
        // console.log(fname)
    }

    const toggle = () => {
        setIsToggled(!isToggled);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-orange-400 border-4 p-2 backdrop-blur-md">

            <div className='mb-2 flex justify-center'>
            <p className="text-white text-sm lg:text-lg 2xl:text-2xl">Get Free No-Obligation Offer Now!</p>
            </div>
            
            <div className='flex flex-row place-items-center mb-2'>
                <div className="flex flex-col">
                    <div className='flex p-2 items-center justify-center w-6 h-6 bg-cyan-800 text-white text-xl rounded-full'>1</div>
                    <div className="text-[8px] text-white">Contact Information</div>
                </div>
                <div className='flex flex-col w-full h-px bg-cyan-500 mx-4'></div>
                <div className="flex flex-col">
                    <div className='flex p-2 items-center justify-center w-6 h-6 bg-cyan-800 text-white text-xl rounded-full'>2</div>
                    <div className="text-[8px] text-white">Property Details</div>
                </div>
            </div> 

            <div className='mb-2'>
                <label htmlFor='address'></label>
                <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="Property Address"
                    required
                    {...register('address')}
                />
            </div>

            <div className="grid gap-2 mb-2 md:grid-cols-3">
                <div>
                    <label htmlFor='city'></label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="City"
                        required
                        {...register('city')} 
                    />
                </div>
                <div>
                    <label htmlFor='state'></label>
                    <input 
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="State"
                        {...register('state')}
                        required />
                </div>
                <div>
                    <label htmlFor='zipcode'></label>
                    <input 
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="Zipcode"
                        {...register('zipcode')}
                        required 
                    />
                </div>
            </div>

            <div className="mb-2">
                <label htmlFor='name'></label>
                <input 
                    type="text"
                    placeholder="Full Name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    {...register('name')}
                    required    
                />
                </div>
                <div className="grid gap-2 mb-2 md:grid-cols-2">
                <div>
                    <label htmlFor='email'></label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="Email"
                    {...register('email')}
                    required 
                />
                </div>
                <div>
                    <label htmlFor='phone'></label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="Phone"
                        {...register('phone')}
                        required
                    />
                </div>
            </div>
                
            <div className="flex items-start p-2">
                <div className="flex items-center h-3">
                    <label htmlFor='tos'></label>
                    <input
                        type="checkbox" 
                        value="" 
                        className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
                        required
                        {...register('tos')}
                        onClick={toggle}
                    />
                </div>
                <label
                    htmlFor="remember"
                    className="ms-2 text-[8px] text-slate-50 dark:text-gray-300">By submitting this request for information, I hereby agree to the <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">Terms Of Use and Privacy Policy</a> and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.
                </label>
            </div>
            {isToggled ? (
                <div className="py-2">
                    <button
                        disabled={isToggled}
                        type="submit" 
                        className={`active-btn`}
                        >
                        <p>Get Cash Offer</p>
                    </button>
                </div>
            ):(
                <div className="py-2">
                    <button
                        disabled={!isToggled}
                        type="submit" 
                        className={`disabled-btn`}>
                        <p>Get Cash Offer</p>
                    </button>
                </div>
            )}
            
            
        </form>
    );
}

export default ContactFormDesktop;