'use client'


const ContactForm = () => {

    return (
        <form>
            <div className="flex flex-col max-w-sm">
                <div className="relative">
                    <label htmlFor='name'></label>
                    <input
                        placeholder="Property Address"
                        type="text"
                        className="border border-[#F0F0F0]  h-[50px] rounded-lg p-5 mb-5 w-full"
                    />
                </div>

                <div className="flex flex-row space-x-2 ">
                    <div>
                        <label htmlFor="city"></label>
                        <input 
                            placeholder="City"
                            type="text"
                            className="border border-[#F0F0F0] h-[50px] rounded-lg p-5 mb-5 min-w-16 max-w-28"
                        />
                    </div>
                    <div>
                        <label htmlFor="state"></label>
                        <input 
                            placeholder="State"
                            type="text"
                            className="border border-[#F0F0F0] h-[50px] rounded-lg p-5 mb-5 min-w-16 max-w-28"
                        />
                    </div>
                    <div>
                        <label htmlFor="zipcode"></label>
                        <input 
                            placeholder="ZipCode"
                            type="text"
                            className="border border-[#F0F0F0] h-[50px] rounded-lg p-5 mb-5 min-w-16 max-w-28"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label htmlFor='full-name'></label>
                    <input
                        placeholder="Full Name"
                        type="text"
                        className="border border-[#F0F0F0]  h-[50px] rounded-lg p-5 mb-5 w-full"
                    />
                </div>

                <div className="flex flex-row justify-between">
                    <div>
                        <label htmlFor="email"></label>
                        <input 
                            placeholder="Email"
                            type="text"
                            className="border border-[#F0F0F0] h-[50px] rounded-lg p-5 mb-5  min-w-16 max-w-40"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone"></label>
                        <input 
                            placeholder="Phone"
                            type="text"
                            className="border border-[#F0F0F0] h-[50px] rounded-lg p-5 mb-5  min-w-16 max-w-40"
                        />
                    </div>

                </div>
            </div>
        </form>
    );

}

export default ContactForm;