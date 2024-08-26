import Image from "next/image";

const WorkHoursPage = () => {
    return (
      <div className='flex flex-col sm:flex-row py-16 px-8 justify-between'>
        <div className='flex flex-col'>
          <div className='flex justify-center text-3xl lg:text-4xl'>Mon - Fri</div>
          <div className='flex justify-center'>
            <Image 
              src='/cyan-clock-weekday.svg'
              alt='Weekday hours of operation'
              width={350}
              height={30}
            />
          </div>
          <div className='flex justify-center max-sm:hidden'>10:00 AM - 5:00 PM</div>
        </div>
        
        
        <div className='flex flex-col'>
          <div className='flex justify-center text-3xl lg:text-4xl'>Saturday</div>
          <div className='flex justify-center'>
            <Image 
              src='/cyan-clock-weekend.svg'
              alt='Saturday hours of operation'
              width={350}
              height={30}
            />
          </div>
          <div className='flex justify-center max-sm:hidden'>11:00 AM - 3:00 PM</div>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-center text-3xl lg:text-4xl'>Sunday</div>
          <div className='flex justify-center'>
            <Image 
              src='/cyan-sunday-hours.svg'
              alt='Sunday hours of operation'
              width={350}
              height={30}
            />
          </div>
          <div className='flex justify-center max-sm:hidden'>Day off</div>
        </div>
      </div>
    );
  }
  
  export default WorkHoursPage;