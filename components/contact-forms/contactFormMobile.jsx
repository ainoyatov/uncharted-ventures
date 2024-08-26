'use client'

import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactFormMobile = () => {

    const [isToggled, setIsToggled] = useState(false);
    const {register, handleSubmit, reset} = useForm();

    const toggle = () => {
        setIsToggled(!isToggled);
    }

    const onSubmit = async (data) => {
        console.log('Submit is working!')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center backdrop-blur-sm'>
            <div className='flex flex-col my-8 xs:py-8'>
                <div className="flex p-2 justify-center bg-gradient-to-t from-cyan-700 via-white to-white bg-clip-text text-transparent font-bold text-3xl xs:text-4xl sm:text-5xl">Get Free No-Obligation</div>
                <div className="flex p-2 justify-center bg-gradient-to-t from-cyan-700 via-white to-white bg-clip-text text-transparent font-bold text-3xl xs:text-4xl sm:text-5xl">Offer Now!</div>
            </div>
            <div className='flex flex-row place-items-center mb-6 w-3/4'>
                <div className="flex flex-col">
                    <div className='flex p-4 items-center justify-center w-10 h-10 bg-cyan-700  text-white text-xl font-bold rounded-full'>1</div>
                    <div className="text-sm text-white">Contact Information</div>
                </div>
                <div className='flex flex-col w-full h-px bg-cyan-500 mx-8'></div>
                <div className="flex flex-col">
                    <div className='flex p-4 items-center justify-center w-10 h-10 bg-cyan-700 text-white text-xl font-bold rounded-full'>2</div>
                    <div className="text-sm text-white">Property Details</div>
                </div>
                
            </div>
            
            
            <div className='mb-6 w-3/4'>
                <label htmlFor="property-address"></label>
                <input 
                    type="text"  
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="Property Address"
                    required
                    {...register('property-address')} 
                />
            </div>
            <div className="grid gap-6 mb-6 grid-cols-3 w-3/4">
                <div>
                    <label htmlFor="city"></label>
                    <input 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="City" 
                        required
                        {...register('city')}
                    />
                </div>
                <div>
                    <label htmlFor='state'></label>
                    <input 
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="State"
                        required
                        {...register('state')}
                    />
                </div>
                <div>
                    <label htmlFor='zipcode'></label>
                    <input 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="Zipcode"
                        required
                        {...register('zipcode')}
                    />
                </div>  

            </div>
            <div className="mb-6 w-3/4">
                <label htmlFor='full-name'></label>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    required
                    {...register('full-name')}
                />
            </div>

            <div className="grid gap-6 mb-6 grid-cols-2 w-3/4">
                <div>
                    <label htmlFor='email'></label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="Email"
                        required
                        {...register('email')}
                    />
                </div>
                <div>
                    <label htmlFor='phone'></label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="Phone"
                        required
                        {...register('phone')}

                    />
                </div>

            </div>
            
            <div className="flex items-start mb-6 w-3/4">
                <div className="flex items-center h-5">
                    <label htmlFor='tos'></label>
                    <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
                        required
                        {...register('tos')}
                        onClick={toggle}
                    />
                </div>
                <div>
                    <label
                        htmlFor="remember"
                        className="ms-2 text-sm font-medium text-white md:text-slate-200 dark:text-gray-300">By submitting this request for information, I hereby agree to the <a href="/terms-of-service" className="text-cyan-600 hover:underline dark:text-cyan-500">Terms Of Use</a> and <a href="/privacy-policy" className="text-cyan-600 hover:underline dark:text-cyan-500">Privacy Policy</a> and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.
                    </label>
                </div>
            </div>
            
            {isToggled ? (
                <div className="py-4 w-3/4">
                    <button
                        disabled={!isToggled}
                        type="submit"
                        className={`active-btn `}
                    >
                        <p>Get Cash Offer</p>
                    </button>
                </div>
            ):(
                <div className="py-4 w-3/4">
                    <button
                        disabled={!isToggled}
                        type="submit"
                        className={`disabled-btn`}
                    >
                        <p>Get Cash Offer</p>
                    </button>
                </div>
            )}

        </form>

    );
}

export default ContactFormMobile;