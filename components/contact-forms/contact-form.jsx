'use client';

import { useState } from "react";
import {sendEmail} from '../../utils/sendEmail'


export default function ContactForm() {

    const [state, setState] = useState('')

    const FormAction = async (formData) => {
        const res = await fetch('/api/form', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json();
        
        //set the state
        setState(data);
        
        //send email
        sendEmail(data);
        
        
        if (data.status === 'ok') {
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }

    }

    return (
        <>  
            
            <form action={FormAction} className="flex justify-center p-4">
                <div className="flex flex-col  space-y-4">
                    <input type="text" name="name" placeholder="Enter name" className="border rounded-xl p-2"/>
                    <input type="text" name="phone" placeholder="Enter phone" className="border rounded-xl p-2" />
                    <input type="text" name="email" placeholder="Enter email" className="border rounded-xl p-2"/>
                    <button type="submit" className="bg-green-300 p-2 rounded-full">Submit</button>

                    {state.message}
                </div>
            </form>
        </>
    )
}
