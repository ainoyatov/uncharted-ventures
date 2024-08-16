
import {Metadata} from "next";

const TermsOfService = () => {
    return (
        <div className="flex flex-col p-2 md:p-8">
            <div className="text-2xl md:text-3xl text-blue-500 flex w-full justify-center mb-4">Terms of Service</div>
            <div className="font-bold mb-4">Terms of Service Updated: 8/1/2024</div>
            <div className="mb-4">Uncharted Ventures LLC Messaging Terms & Conditions</div>
            <div className="mb-2">
                You agree to receive recurring automated promotional and personalized marketing text (e.g., SMS and MMS) 
                messages (e.g. cart reminders) from <span className="font-bold">uncharted-ventures.com, a brand owned and operated by Uncharted Ventures LLC</span>, 
                including text messages that may be sent using an automatic telephone dialing system, to the mobile telephone
                number you provided when signing up or any other number that you designate. Consent to receive automated marketing
                text messages is not a condition of any purchase. Msg & Data rates may apply. Message frequency will vary. 
                Uncharted Ventures LLC reserves the right to alter the frequency of messages sent at any time, to increase or decrease
                the total number of sent messages. Uncharted Ventures LLC also reserves the right to change the short code or phone number
                from which messages are sent and we will notify you when we do so Not all mobile devices or handsets may be supported, 
                and our messages may not be deliverable in all areas. Uncharted Ventures LLC, its service providers, and the mobile carriers 
                supported by the program are not liable for delayed or undelivered messages.
            </div>
            <div className="mb-4">
                We can deliver messages to the following mobile phone carriers: AT&T, Verizon Wireless, Sprint, T-Mobile, and other major 
                national and regional carriers.
            </div>
            <div className="font-bold mb-2">Cancellation</div>
            <div className="mb-2">
                Text the keywords STOP, END, CANCEL, UNSUBSCRIBE or QUIT to cancel. After texting STOP, END, CANCEL, UNSUBSCRIBE, or QUIT you will
                receive one additional message confirming that your request has been processed. You acknowledge that our text message platform 
                may not recognize and respond to unsubscribe requests that do not include the STOP, END, CANCEL, UNSUBSCRIBE, or QUIT keyword
                commands and agree that Launch Control and its service providers will have no liability for failing to honor such requests.  
            </div>
            <div className="font-bold mb-2">Help</div>
            <div className="mb-2">
                Text the keyword HELP to return customer care contact information.
            </div>
            <div className="font-bold mb-2">Customer Care</div>
            <div className="mb-2">
                If you are experiencing any problems, please email the address of the brand at info@uncharted-ventures.com
            </div>
            <div className="font-bold mb-2">Other Terms</div>
            <div className="mb-2">
                These Messaging Terms & Conditions are a part of and subject to our Terms of Use and our 
                Privacy Policy (collectively with these Messaging Terms & Conditions, the “Terms Documents”). 
                By participating in our text message program, you agree to our Terms Documents. 
                To the extent that a conflict exists between these Messaging Terms & Conditions and our Terms of Use, 
                these Messaging Terms & Conditions will control.
            </div>
            <div className="font-bold mb-2">Location</div>
            <div className="mb-2">
                This messaging program is a service of Uncharted Ventures LLC, located at the 8221 E. Evans Rd. Suite C, Scottsdale, AZ 85260
            </div>
            <div className="font-bold mb-2">Contact us</div>
            <div className="mb-2">
                If you have any questions, concerns, or requests related to this Terms of Service, please contact us at legal@uncharted-ventures.com
            </div>
            <div className="mb-2">
                Uncharted Ventures LLC policies are subject to change at any time with or without notice. 
            </div>
        </div>
    );
}

export default TermsOfService;