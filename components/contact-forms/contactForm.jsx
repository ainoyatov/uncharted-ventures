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
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
            <div className='mb-6 flex w-full max-xs:px-10 justify-center'>
                <div className="text-blue-700 font-bold text-2xl p-5">Get Free No-Obligation Offer Now!</div>
            </div>
            <div className='flex flex-row place-items-center mb-6 w-3/4'>
                <div className="flex flex-col">
                    <div className='flex p-4 items-center justify-center w-10 h-10 bg-blue-500 text-white text-xl font-bold rounded-full'>1</div>
                    <div className="text-sm text-slate-600">Contact Information</div>
                </div>
                <div className='flex flex-col w-full h-px bg-blue-500 mx-8'></div>
                <div className="flex flex-col">
                    <div className='flex p-4 items-center justify-center w-10 h-10 bg-blue-500 text-white text-xl font-bold rounded-full'>2</div>
                    <div className="text-sm text-slate-600">Property Details</div>
                </div>
                
            </div>
            
            
            <div className='mb-6 w-3/4'>
                <label htmlFor="property-address"></label>
                <input 
                    type="text"  
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="City" 
                        required
                        {...register('city')}
                    />
                </div>
                <div>
                    <label htmlFor='state'></label>
                    <input 
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="State"
                        required
                        {...register('state')}
                    />
                </div>
                <div>
                    <label htmlFor='zipcode'></label>
                    <input 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    {...register('full-name')}
                />
            </div>

            <div className="grid gap-6 mb-6 grid-cols-2 w-3/4">
                <div>
                    <label htmlFor='email'></label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                        required
                        {...register('email')}
                    />
                </div>
                <div>
                    <label htmlFor='phone'></label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                        {...register('tos')}
                        onClick={toggle}
                    />
                </div>
                <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-slate-50 md:text-slate-200 dark:text-gray-300">By submitting this request for information, I hereby agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Terms Of Use and Privacy Policy</a> and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.
                </label>
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