'use client';

import { InlineWidget } from 'react-calendly';

const CalendlyBooking = () => {

  return(
    <div>
      <div>
        <div className="text-blue-500 text-4xl font-bold text-center flex justify-center mt-8 max-md:mt-10">
          Schedule Time
        </div>
        <div className="text-neutral-500  text-lg  text-center font-medium flex justify-center p-4 mb-8">
          In person meeting? A quick call? Book your appointment now!
        </div>
      </div>

      <div className='p-2 sm:p-4 flex lg:justify-center w-screen h-screen'>
        <InlineWidget 
          url="https://calendly.com/uncharted-ventures-info/consulting"
          styles={{
            height: '100%', 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}  
        />
      </div>
    </div>
  )

}

export default CalendlyBooking