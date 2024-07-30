'use client'

import CustomButton from '@/components/custom-buttons/customButton';


const ContactForm = () => {

    const handleSubmit = () => {
        alert('Message Sent!!!')
    }

    return (
        <form className='border-orange-400 border-8 p-4 shadow-2xl'>
            <div className='mb-6 flex justify-center'>
                <p className="text-blue-700 font-bold text-lg 2xl:text-2xl">Get Free No-Obligation Offer Now!</p>
            </div>
            <div className='flex flex-row place-items-center mb-6'>
                <div className='flex p-4 items-center justify-center w-10 h-10 bg-blue-500 text-white text-xl font-bold rounded-full'>1</div>
                <div className='flex flex-col w-full h-px bg-blue-500 mx-8'></div>
                <div className='flex p-4 items-center justify-center w-10 h-10 bg-blue-500 text-white text-xl font-bold rounded-full'>2</div>
            </div>
            
            
            <div className='mb-6'>
                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Property Address" required />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
                </div>
                <div>
                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
                </div>
                <div>
                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zipcode" required />
                </div>  

            </div>
            <div className="mb-6">
                <input type="full-name" placeholder="Full Name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div className="grid gap-3 mb-6 md:grid-cols-2">
                <div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
                <div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required/>
                </div>

            </div>
            
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-slate-500 md:text-slate-200 dark:text-gray-300">By submitting this request for information, I hereby agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Terms Of Use and Privacy Policy</a> and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.</label>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Cash Offer</button>
        </form>

    );
}

export default ContactForm;