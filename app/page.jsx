import Image from "next/image";
import { Icon } from "@iconify/react";
import GoogleReviews from '../components/google/reviews'
import FAQ from '../components/contact-forms/faq'
import ContactFormMobile from '../components/contact-forms/contact-form'
import ContactFormDesktop from '../components/contact-forms/contact-form-desktop'


export default async function Home() {

  const placeID = process.env.PLACE_ID
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  //Field = reviews
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`)
  const data = await response.json()
  const reviews = data.result.reviews.map((review) => review)
  
  //Field = user_ratings_total
  const rsp = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=user_ratings_total&key=${apiKey}`)
  const dt = await rsp.json()
  const totalUserReviews = dt.result.user_ratings_total
  
  return (
    <main className="flex min-h-screen flex-col items-center md:p-0 ">

      <div className="bg-image-main w-full min-h-screen bg-cover bg-no-repeat relative max-md:hidden flex place-items-center ">

        <div className="absolute inset-0 grid grid-cols-2 place-items-center mx-2">
          <div className="flex flex-col ">
            <div className="flex flex-row flex-wrap mb-6">
              <div className="p-2 text-5xl xl:text-7xl text-white bg-cyan-900">Sell</div>
              <div className="p-2 text-5xl xl:text-7xl">Your</div>
              <div className="p-2 animate-bounce text-white text-5xl xl:text-7xl bg-cyan-900">House</div>
            </div>
            
            <div className="flex flex-row flex-wrap text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-12">
              <div className="p-2 text-5xl xl:text-7xl text-white ">Fast</div>
              <div className="p-2 text-5xl xl:text-7xl">For</div>
              <div className="p-2 text-5xl xl:text-7xl text-white bg-cyan-900">Cash</div>
            </div>


            <div className="flex flex-row place-items-center space-x-2 w-full justify-center scale-75 bg-cyan-900 mb-2">
              <Icon icon="game-icons:check-mark" color="white"/>
              <div className="text-xl md:text-2xl md:p-1 text-white font-semibold">Top Dollar Cash Offer</div>  
            </div>
            <div className="flex flex-row place-items-center space-x-2 w-full justify-center scale-75 bg-cyan-900 mb-2">
              <Icon icon="game-icons:check-mark" color="white"/>
              <div className="text-xl md:text-2xl md:p-1 text-white font-semibold ">Close Within 10 Days</div>  
            </div>
            <div className="flex flex-row place-items-center space-x-2 w-full justify-center scale-75 bg-cyan-900 mb-2">
              <Icon icon="game-icons:check-mark" color="white"/>
              <div className="text-xl md:text-2xl md:p-1 text-white font-semibold">Sell In Any Condition</div>  
            </div>
            

          </div>
          
          <div className="max-w-md">
            <ContactFormDesktop />

          </div>
        </div>
      </div>
      
      <div className="flex flex-col place-items-center md:hidden bg-image-main bg-cover bg-bottom md:bg-no-repeat ">
        <div className="flex flex-col p-4 py-8">
          <div className="flex flex-row flex-wrap font-medium text-white text-2sm xs:text-5xl sm:text-6xl mb-6">
            <div className="flex items-center p-2 bg-cyan-900">Sell</div>
            <div className="p-2 text-black ">Your</div>
            <div className="flex items-center animate-bounce bg-cyan-900">House</div>
          </div>

          <div className="flex flex-row flex-wrap text-5xl font-medium lg:text-6xl xl:text-7xl 2xl:text-8xl mb-12 ">
            <div className="p-2 text-2sm xs:text-5xl sm:text-6xl text-white">Fast</div>
            <div className="p-2 text-2sm xs:text-5xl sm:text-6xl">For</div>
            <div className="p-2 flex items-center text-2sm xs:text-5xl sm:text-6xl bg-cyan-900 text-white">Cash</div>
          </div>

          <div className="flex flex-row place-items-center space-x-2 w-full justify-center scale-75 bg-cyan-900 mb-2">
            <Icon icon="game-icons:check-mark" color="white"/>
            <div className=" text-xl text-white font-semibold">Top Dollar Cash Offer</div>  
          </div>
          <div className="flex flex-row place-items-center space-x-2 w-full justify-center scale-75 bg-cyan-900 mb-2 ">
            <Icon icon="game-icons:check-mark" color="white"/>
            <div className=" text-xl text-white font-semibold ">Close Within 10 Days</div>  
          </div>
          <div className="flex flex-row place-items-center space-x-2 w-full justify-center scale-75 bg-cyan-900 mb-2">
            <Icon icon="game-icons:check-mark" color="white"/>
            <div className="text-white font-semibold text-xl">Sell In Any Condition</div>  
          </div>
          
        </div>
        <div className="flex px-0 xs:px-16 sm:px-32">
          <ContactFormMobile />
        </div>
      </div>

      
      <div className="flex flex-col p-2 py-24 space-y-4">
        <div className="flex font-bold text-4xl justify-center">
          <h1>How to get started</h1>
        </div>
        <div className="flex flex-row justify-center place-items-center">
          <div>
            <Icon 
              icon="radix-icons:dash" width={24} height={24}
            />
          </div>
          <div className="flex">
            <Icon 
              icon="pajamas:dash" width={24} height={24}
            />
          </div>
          <div className="flex">
            <Icon icon="meteocons:star-fill" width={48} height={48}/>
          </div>
          <div className="flex">
            <Icon 
              icon="pajamas:dash" width={24} height={24}
            />
          </div>
          <div>
            <Icon 
              icon="radix-icons:dash" width={24} height={24}
            />
          </div>
        </div>
        
        <div className="flex w-full justify-center px-8 md:px-32 text-center leading-loose lg:max-w-[1000px]">
          <p>We help property owners get out of properties from just needting to sell their house fast to upside down in debt and on the verge of losing the property. Many people think that the situation they are currently in is inescapable, but that is not always true. We can help YOU:</p>
        </div>
      </div>

      <div className="grid max-lg:space-y-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:space-x-4 p-4">
        <div className="group shadow-lg rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <div className="flex justify-center p-4">
            <Icon 
              icon="fluent:person-home-16-filled"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            REACH OUT{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Fill out the form online, call or text, and we will get your property details
          </p>
        </div>

        <div className="group shadow-lg rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <div className="flex justify-center p-4">
            <Icon 
              icon="fluent:person-edit-24-filled"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            RECEIVE OFFER{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            We will review your property details, and get you a fair cash offer or other types of offers that will work best for your specific situation.
          </p>
        </div>

        <div className="group shadow-lg rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <div className="flex justify-center p-4">
            <Icon 
              icon="fluent:person-money-20-filled"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            GET FUNDS{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            We will close this quickly and get you paid so you can move on with your life.
          </p>
        </div>
      </div>

      <div className="flex flex-row my-8 place-items-center bg-cyan-600 rounded-full hover:bg-cyan-800 cursor-pointer transition-transform transform hover:scale-125">
        <div className="p-1 m-2 ml-4 rounded-full bg-white">
          <Icon 
            icon="flat-color-icons:cell-phone"
            width={20}
            height={20}
          />
        </div>
        <button className="flex my-2 text-[16px] mr-4 text-white font-semibold">Call Us Today</button>
      </div>

      <div className="flex flex-col my-12 w-full bg-image-grid-options bg-cover bg-bottom  md:bg-no-repeat  justify-center items-center">
        
        <div className="flex flex-col justify-center text-white mt-8 mb-2">
          <div className="flex justify-center text-3xl mxs:text-4xl lg:text-5xl">We Provide Solutions</div>
          <div className="flex exs:justify-center text-3xl mxs:text-4xl lg:text-5xl">For All Situations</div>
        </div>
        <div className="pb-8">
          <Icon 
            icon="carbon:direction-curve"
            color="white"
            width={48}
            height={48}
            className="rotate-180"
          />
        </div>

        <div className="grid grid-cols-1 gap-y-4 px-4 xs:grid-cols-2 md:grid-cols-3 xs:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 max-w-[900px]">
          <div className="group shadow-lg rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <div className="flex flex-row space-x-2 py-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600">
                  <Icon icon="game-icons:check-mark" color="white"/>
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Foreclosure
                </h2>
              </div>
              <p className="m-0 max-w-[30ch] text-sm text-white">
                Is your house in the foreclose process?
              </p>
          </div>

          <div className="group shadow-lg rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="flex flex-row space-x-2 py-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600">
                <Icon icon="game-icons:check-mark" color="white"/>
              </div>
              <h2 className="text-xl font-semibold text-white">
                Pre-Foreclosure
              </h2>
            </div>
            <p className="m-0 max-w-[30ch] text-sm text-white">
              Are you behind on mortgage payments?
            </p>
          </div>     
          <div className="group shadow-lg rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="flex flex-row space-x-2 py-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600">
                <Icon icon="game-icons:check-mark" color="white"/>
              </div>
              <h2 className="text-xl font-semibold text-white">
                Tax Default
              </h2>
            </div>
            <p className="m-0 max-w-[30ch] text-sm  text-white">
              Are you behind on property taxes?
            </p>
          </div>
          <div className="group shadow-lg rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="flex flex-row space-x-2 py-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600">
                <Icon icon="game-icons:check-mark" color="white"/>
              </div>
              <h2 className="text-xl font-semibold text-white">
                Divorced
              </h2>
            </div>
            <p className="m-0 max-w-[30ch] text-sm  text-white">
              Have you been recently divorced?
            </p>
          </div>
          <div className="group shadow-lg rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="flex flex-row space-x-2 py-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600">
                <Icon icon="game-icons:check-mark" color="white"/>
              </div>
              <h2 className="text-xl font-semibold text-white">
                Inherited
              </h2>
            </div>
            <p className="m-0 max-w-[30ch]  text-sm  text-white">
              Were you passed down a home that is a burden?
            </p>
          </div>
          <div className="group shadow-lg rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="flex flex-row space-x-2 py-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600">
                <Icon icon="game-icons:check-mark" color="white"/>
              </div>
              <h2 className="text-xl font-semibold text-white">
                Vacant
              </h2>
            </div>
            <p className="m-0 max-w-[30ch] text-sm  text-white ">
              Are you an absentee home owner with a vacant property?
            </p>
          </div>
        </div>


        {/* <div className="flex flex-row my-8 place-items-center bg-cyan-500 rounded-full hover:bg-cyan-700 cursor-pointer transition-transform transform hover:scale-125">
          <div className="p-1 m-2 ml-4 rounded-full bg-white">
            <Icon 
              icon="flat-color-icons:cell-phone"
              width={20}
              height={20}
            />
          </div>
          <button className="flex my-2 text-[16px] mr-4 text-white font-semibold">Call Us Today</button>
        </div> */}

        <div className="flex flex-col py-16 gap-2 w-full text-white items-center text-3xl">
          <div className="flex mb-2 text-4xl md:text-5xl">No Commission</div>
          <div className="flex mb-2 text-4xl md:text-5xl">No Hidden Charges</div>
          <div className="mb-2">
            <Icon 
              icon="carbon:direction-curve"
              color="white"
              width={48}
              height={48}
              className="rotate-180"
            />
          </div>
          <button className="flex flex-row p-2 gap-2 text-xl cursor-pointer  transition-transform  transform hover:scale-125 rounded-full bg-cyan-600 text-white  hover:bg-cyan-800">
            <Icon icon="fa6-solid:sack-dollar" width={24} height={24} />
            <div className="flex">Free Cash Offer</div>
          </button>
        </div>

      </div>

      <div className="flex flex-col p-2 pb-8 pt-16 space-y-4">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="flex text-[20px] exs:text-[32px] justify-center font-bold lg:text-2xl px-2">Why Work</div>
          <div className="flex text-[20px] exs:text-[32px] justify-center font-bold lg:text-2xl">With Us</div>
        </div>
        <div className="flex flex-row justify-center place-items-center">
          <div>
            <Icon 
              icon="radix-icons:dash" width={24} height={24}
            />
          </div>
          <div className="flex">
            <Icon 
              icon="pajamas:dash" width={24} height={24}
            />
          </div>
          <div className="flex">
            <Icon icon="meteocons:star-fill" width={48} height={48}/>
          </div>
          <div className="flex">
            <Icon 
              icon="pajamas:dash" width={24} height={24}
            />
          </div>
          <div>
            <Icon 
              icon="radix-icons:dash" width={24} height={24}
            />
          </div>
        </div>
        
        <div className="flex w-full justify-center px-8 md:px-32 text-center leading-loose lg:max-w-[1000px]">
          <p>We are committed to providing top tier service to every customer. 
            You can trust <span className="font-bold">Uncharted Ventures</span> to give you the BEST offer to purchase your house.
          </p>
        </div>
      </div>

      <div className="grid max-lg:space-y-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:space-x-4 py-8 p-4">
        <div className="group shadow-lg rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <div className="flex justify-center p-4">
            <Icon 
              icon="mdi:cash-fast"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            FAST CASH PAYMENT{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Need a fast house sale? We can close in less than 14-30 days. Get your cash offer today!
          </p>
        </div>

        <div className="group shadow-lg rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <div className="flex justify-center p-4">
            <Icon 
              icon="fa6-solid:people-group"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            USA-BASED TEAM{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            With a team based in USA, we can offer a fair and honest assessment of the house ensuring that you receive the highest offer for your home.
          </p>
        </div>

        <div className="group shadow-lg rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <div className="flex justify-center p-4">
            <Icon 
              icon="emojione-monotone:timer-clock"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            DELIVER ON TIME{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Unlike our competitors we do not need to rely on finding a suitable buyer, so we deliver on our promise of delivering funds on the agreed date.
          </p>
        </div>
      </div>

      <div className="flex flex-col p-4 md:flex-row md:justify-center gap-4 xl:gap-8  py-8">
        <div className="flex flex-col text-lg md:text-lg ml:text-xl  md:font-thin p-4">
          <div className="flex flex-row space-x-4 py-4 items-center border-b-2">
            <div className="flex items-center justify-center">
              <Icon icon="game-icons:check-mark" color="black dark:invert"/>
            </div>
            <p>We buy properties in any condition</p>
          </div>
          <div className="flex flex-row space-x-4 py-4 items-center border-b-2">
            <div className="flex items-center justify-center  ">
              <Icon icon="game-icons:check-mark" color="black dark:invert"/>
            </div>
            <p>Get an offer within 72 hours</p>
          </div>
          <div className="flex flex-row space-x-4 py-4 items-center border-b-2">
            <div className="flex items-center justify-center">
              <Icon icon="game-icons:check-mark" color="black dark:invert"/>
            </div>
            <p>Quick and easy sale</p>
          </div>
          <div className="flex flex-row space-x-4 py-4 items-center border-b-2">
            <div className="flex items-center justify-center">
              <Icon icon="game-icons:check-mark" color="black dark:invert"/>
            </div>
            <p>Personalised service</p>
          </div>
          <div className="flex flex-row space-x-4 py-2 items-center">
            <div className="flex items-center justify-center">
              <Icon icon="game-icons:check-mark" color="black dark:invert"/>
            </div>
            <p>Receive a free home evaluation</p>
          </div>
        </div>

        <div className="flex flex-col text-lg md:text-lg ml:text-xl md:font-thin p-4 ">
          <div className="flex flex-row space-x-4 py-4 items-center border-b-2">
            <div className="flex items-center justify-center">
              <Icon
                icon="dashicons:no-alt"
                color="black dark:invert"
                width={28}
                height={28}
              />
            </div>
            <p>No repairs or cleaning required</p>
          </div>
          <div className="flex flex-row space-x-4 py-4 items-center border-b-2">
            <div className="flex items-center justify-center">
              <Icon
                icon="dashicons:no-alt"
                color="black dark:invert"
                width={28}
                height={28}
              />
            </div>
            <p>No obligations</p>
          </div>
          <div className="flex flex-row space-x-4 py-4 items-center border-b-2">
            <div className="flex items-center justify-center">
              <Icon 
                icon="dashicons:no-alt"
                color="black dark:invert"
                width={28}
                height={28}
              />
            </div>
            <p>No listings or for sale boards</p>
          </div>
          <div className="flex flex-row space-x-4 py-4 items-center border-b-2">
            <div className="flex items-center justify-center">
              <Icon 
                icon="dashicons:no-alt" 
                color="black dark:invert"
                width={28}
                height={28}
              />
            </div>
            <p>No waiting months for a buyer</p>
          </div>
          <div className="flex flex-row space-x-4 py-4 items-center">
            <div className="flex items-center justify-center">
              <Icon 
                icon="dashicons:no-alt" 
                color="black dark:invert"
                width={28}
                height={28}
              />
            </div>
            <p>No fees or commissions charged</p>
          </div>
        </div>
      </div>

      {/* <button className="cursor-pointer  transition-transform  transform hover:scale-125 rounded-full bg-cyan-500 text-white my-2 flex flex-row p-2 gap-2 text-xl hover:bg-cyan-700">
          <Icon icon="fa6-solid:sack-dollar" width={24} height={24} />
          <p>Free Cash Offer</p>
      </button> */}

      <div className="flex flex-row my-8 place-items-center bg-cyan-500 rounded-full hover:bg-cyan-700 cursor-pointer transition-transform transform hover:scale-125">
        <div className="p-1 m-2 ml-4 rounded-full bg-white">
          <Icon 
            icon="flat-color-icons:cell-phone"
            width={20}
            height={20}
          />
        </div>
        <button className="flex my-2 text-[16px] mr-4 text-white font-semibold">Call Us Today</button>
      </div>

      <div className="p-2 py-16">
        <div className="flex justify-center text-2xl font-bold mb-4">FAQ</div>
        <div className="flex flex-row justify-center place-items-center">
          <div>
            <Icon 
              icon="radix-icons:dash" width={24} height={24}
            />
          </div>
          <div className="flex">
            <Icon 
              icon="pajamas:dash" width={24} height={24}
            />
          </div>
          <div className="flex">
            <Icon icon="meteocons:star-fill" width={48} height={48}/>
          </div>
          <div className="flex">
            <Icon 
              icon="pajamas:dash" width={24} height={24}
            />
          </div>
          <div>
            <Icon 
              icon="radix-icons:dash" width={24} height={24}
            />
          </div>
        </div>
        <div className="flex w-full justify-center px-8 md:px-32 text-center leading-loose lg:max-w-[1000px]">
          <p className="p-2 py-4 mb-4">Explore our frequently asked questions to find essential information on buying and selling homes, including tips, processes, and answers to common concerns, all aimed at making your real estate journey smooth and informed.</p>
        </div>
        
        <div className="flex justify-center">
          <FAQ />
        </div>

      </div>

      <div className="flex flex-col py-12 lg:space-y-2">
          
          <div className="flex w-full justify-center text-5xl mb-2">
            Excellent
          </div>

          <div className="flex flex-row w-full justify-center pb-2">
            <Icon icon="noto:star" width="32" height="32"/>
            <Icon icon="noto:star" width="32" height="32"/>
            <Icon icon="noto:star" width="32" height="32"/>
            <Icon icon="noto:star" width="32" height="32"/>
            <Icon icon="noto:star" width="32" height="32"/>
          </div>
          
          <div className="flex w-full justify-center font-light text-[10px] pb-2">
            Based on <span className="font-bold px-1">{totalUserReviews} Reviews</span>
          </div>
          <div className="flex w-full justify-center pb-2">
            <Image 
              src='/google-logo.svg'
              alt="Google review logo"
              width={90}
              height={90}
            />
          </div>

      </div>
      
      <div className='pb-4 py-6 overflow-x-scroll overscroll-none w-[200px] exs:w-[300px] mxs:w-[400px] xs:w-[450px] sm:w-[620px] md:w-[725px] lg:w-[970px] xl:w-[1270px] 2xl:w-[1526px]'>   
        <div className='flex flex-row gap-4'>
          {reviews.map((review, index) => (
              review.text.length > 0 ? (
                <div key={index} className="relative aspect-square h-[28vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3 ">
                  <GoogleReviews 
                    reviews={review.text}
                    authors={review.author_name}
                    reviewTime={review.time}
                    pictures={review.profile_photo_url}
                    index={index}
                  />
                </div>
              ) : null
            ))
          }
          </div>
      </div>

    </main>
  );
}

      

      