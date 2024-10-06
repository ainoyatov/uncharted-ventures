'use client';

import { useState } from "react";
import {sendEmail} from '../../utils/sendEmail'


export default function ContactFormDesktop() {

    const [state, setState] = useState('')
    const [isToggled, setIsToggled] = useState(false);

    const FormAction = async (formData) => {
        const res = await fetch('/api/form', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json();
        
        //set the state
        setState(data);
        
        console.log(data)
        //send email
        sendEmail(data);
        
        
        if (data.status === 'ok') {
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }

    }

    const toggle = () => {
        setIsToggled(!isToggled);
    }

    return (
        <div className="p-2">

            {
                state.sent ? (
                    <div className="flex justify-center bg-white border-2 rounded-2xl text-xl text-green-500 font-semibold p-2 m-4">{state.message}</div>
                ):(
                    ''
                )
            }
            
            <form action={FormAction} className="border-orange-400 border-4 p-2 backdrop-blur-md">

                <div className='flex flex-col pt-4 pb-2'>
                    <div className="flex justify-center text-white text-lg lg:text-lg 2xl:text-2xl">Get Free No-Obligation</div>
                    <div className="flex justify-center text-white text-lg lg:text-lg 2xl:text-2xl">Offer Now!</div>
                </div>

                <div className='flex flex-row place-items-center mb-2  justify-center'>
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

                <div className='mb-2 '>
                    
                    <input 
                        type="text"
                        name="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="Property Address"
                        required
                    />
                </div>

                <div className="grid gap-2 mb-2 md:grid-cols-3 ">
                    <div>
                        
                        <input
                            type="text"
                            name="city"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="City"
                            required
                             
                        />
                    </div>
                    <div>
                        
                        <input 
                            type="text"
                            name="state"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="State"
                            required 
                        />
                    </div>
                    <div>
                        
                        <input 
                            type="text"
                            name="zipcode"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="Zipcode"
                            required 
                        />
                    </div>
                </div>

                <div className="mb-2 ">
                    
                    <input 
                        type="text"
                        name="name"
                        placeholder="Full Name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        required  
                    />
                    </div>
                    <div className="grid gap-2 mb-2 md:grid-cols-2 ">
                    <div>
                        
                        <input
                            type="text" 
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="Email"
                            required 
                        />
                    </div>
                    <div>
                        
                        <input
                            type="text"
                            name="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="Phone"
                            required
                        />
                    </div>
                </div>
                    
                <div className="flex items-start p-2 ">
                    <div className="flex items-center h-4 ">
                        <input
                            type="checkbox"
                            name="tos"
                            value="" 
                            className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
                            required
                            onClick={toggle}
                        />
                    </div>
                    <div
                        className="ms-2 text-[8px] text-slate-50 dark:text-gray-300"
                    >
                        <p>
                            By submitting this request for information, I hereby agree to the <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">Terms Of Use and Privacy Policy</a> and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.
                        </p>
                    </div>
                </div>
                
                
                {isToggled ? (
                    <div className="py-2">
                        <button
                            disabled={!isToggled}
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
            
        </div>
    )
}
