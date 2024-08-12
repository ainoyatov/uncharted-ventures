import Image from "next/image";
import ContactFormMobile from '@/components/contact-forms/contactFormMobile'
import ContactFormDesktop from "@/components/contact-forms/contactFormDesktop";
import { Icon } from "@iconify/react";
import GoogleReviews from '@/components/google/reviews'

export default async function Home() {

  const placeID = process.env.PLACE_ID
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`)
  const data = await response.json()
  const reviews = data.result.reviews.map((review:any) => review)


  return (
    <main className="flex min-h-screen flex-col items-center py-4 md:p-0 ">
      <div className="z-10 w-full  items-center justify-between font-mono text-sm 2xl:text-lg lg:flex 4xl:justify-center p-4">
        <p className="fixed lg:mb-4 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-500 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Uncharted Ventures&nbsp;
          <code className="font-mono font-bold">LLC</code>
        </p>
      </div>

      <div className="bg-image-main w-full md:h-[60vh] ml:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh]   bg-cover bg-no-repeat relative max-md:hidden flex place-items-center ">

        <div className="absolute inset-0 grid grid-cols-2 place-items-center mx-2">
          <div className="flex flex-col space-y-4">
            <h1 className="bg-gradient-to-r from-white via-orange-600 to-white bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Sell Your House</h1>
            <h1 className="bg-gradient-to-r from-white via-orange-600 to-white bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Fast For Cash!</h1>
          </div>
          <div className="max-w-md backdrop-blur-md">
            <ContactFormDesktop />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col place-items-center md:hidden bg-image-bottom bg-no-repeat ">
        <div className="flex flex-col p-4 py-8">
          <div className="flex flex-row flex-wrap">
            <div className="p-2 text-white bg-clip-text text-transparent text-2sm xs:text-5xl sm:text-6xl">Sell</div>
            <div className="p-2 text-white bg-clip-text text-transparent text-2sm xs:text-5xl sm:text-6xl">Your</div>
            <div className="animate-bounce p-2 bg-gradient-to-t from-red-600 via-white to-slate-600 bg-clip-text text-transparent text-2sm xs:text-5xl sm:text-6xl">House</div>
          </div>
          <div className="p-2  text-white bg-clip-text text-transparent text-2sm xs:text-5xl sm:text-6xl ">Fast For Cash!</div>
          
          <div className="flex flex-row place-items-center space-x-2 w-full justify-center">
            <Icon icon="game-icons:check-mark" color="orange"/>
            <div className=" text-xl text-blue-700 dark:text-white">Top Dollar Cash Offer</div>  
          </div>
          <div className="flex flex-row place-items-center space-x-2 w-full justify-center">
            <Icon icon="game-icons:check-mark" color="orange"/>
            <div className="text-blue-700 text-xl dark:text-white">Close Within 10 Days</div>  
          </div>
          <div className="flex flex-row place-items-center space-x-2 w-full justify-center ">
            <Icon icon="game-icons:check-mark" color="orange"/>
            <div className="text-blue-700 text-xl dark:text-white">Sell In Any Condition</div>  
          </div>
          
        </div>
        <div className="">
          <div className="">
            <ContactFormMobile />
          </div>
        </div>
      </div>

      <div className="flex flex-col py-12 lg:py-16">
          
          <div className="flex w-full justify-center text-2xl">
            Excellent
          </div>

          <div className="flex flex-row w-full justify-center pb-2">
            <Icon icon="noto:star" width="24" height="24"/>
            <Icon icon="noto:star" width="24" height="24"/>
            <Icon icon="noto:star" width="24" height="24"/>
            <Icon icon="noto:star" width="24" height="24"/>
            <Icon icon="noto:star" width="24" height="24"/>
          </div>
          
          <div className="flex w-full justify-center font-light text-[10px] pb-2">
            Based on <span className="font-bold px-1">67 Reviews</span>
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
      
      <div className='pb-4 overflow-x-scroll overscroll-none w-[200px] exs:w-[300px] mxs:w-[400px] xs:w-[450px] sm:w-[620px] md:w-[725px] lg:w-[970px] xl:w-[1270px] 2xl:w-[1526px]'>   
        <div className='flex flex-row gap-4'>
          {reviews.map((review:any, index:number) => (
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
      
      <div className="flex flex-col p-2 py-16 space-y-4">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="flex text-[20px] exs:text-[32px] justify-center font-bold lg:text-2xl px-2">We Buy Houses</div>
          <div className="flex text-[20px] exs:text-[32px] justify-center font-bold lg:text-2xl">In 3 Easy Steps</div>
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

      <div className="grid space-y-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:space-x-4">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group shadow-lg rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center p-6">
            <Icon 
              icon="emojione:house-with-garden"
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
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group shadow-lg rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center p-4">
            <Icon 
              icon="emojione-v1:document"
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
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group shadow-lg rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center p-4">
            <Icon 
              icon="streamline-emojis:dollar-banknote"
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
        </a>
      </div>

      <div className="flex flex-row my-8 place-items-center bg-blue-400 rounded-xl">
        <div className="p-1 m-2 ml-4 rounded-full bg-white">
          <Icon 
            icon="flat-color-icons:cell-phone"
            width={20}
            height={20}
          />
        </div>
        <button className="flex my-4 text-[16px] mr-4 text-white font-semibold">Call Me Today: 602-566-3816</button>
      </div>

    </main>
  );
}


// import Image from "next/image";
// import ContactForm from '@/components/contact-forms/contactForm';

// export default function Home() {
//   return (
//     <main>

//       <div className="flex flex-col items-center  relative">

//         <Image
//               className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
//               src="/modern-condo.jpeg"
//               alt="Hope Page Image"
//               // width={3480}
//               // height={1}
//               style={{
//                 objectFit: 'cover'
//               }}
//               fill
//               priority
//           />

//         <div className="z-10 w-full px-4 items-center justify-between font-mono text-sm lg:flex ">
//           <p className="fixed lg:mb-4 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-500 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//             Uncharted Ventures&nbsp;
//             <code className="font-mono font-bold">LLC</code>
//           </p>
//         </div>

        
//         <div className="grid lg:grid-cols-2 place-items-center max-w-[1800px] ">
//           {/* <div className="py-16">
//             <div className="flex flex-col px-16">
//               <h1 className="bg-gradient-to-r from-amber-200 via-yellow-600 to-orange-600 bg-clip-text text-transparent text-5xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[156px]">Sell Your House</h1>
//               <br />
//               <h1 className="bg-gradient-to-r from-emerald-200 via-yellow-600 to-orange-600 bg-clip-text text-transparent text-5xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[156px]">Fast For Cash!</h1>
//             </div>
//           </div> */}
//           <div className="px-8">
//             <ContactForm />
//           </div>

//           <div className="px-8">
//             <ContactForm />
//           </div>
//         </div>

        
        
//       </div>
      
//       <div className="m-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
      


//     </main>       
//   );
// }




// {/* <div className="z-10 w-full px-4 items-center justify-between font-mono text-sm lg:flex ">
//         <p className="fixed lg:mb-4 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-500 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Uncharted Ventures&nbsp;
//           <code className="font-mono font-bold">LLC</code>
//         </p> */}
//         {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div> */}
//       {/* </div> */}
      
//       {/* <div className="">
//           <Image
//             className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
//             src="/modern-condo.jpeg"
//             alt="Hope Page Image"
//             width={3480}
//             height={1}
//             // fill
//             priority
//           />
          
//           <div className="absolute inset-0  grid lg:grid-cols-2 place-items-center  max-w-[1800px]">
//             <div className="py-16 xl:py-24">
//               <div className="flex flex-col px-16">
//                 <h1 className="bg-gradient-to-r from-amber-200 via-yellow-600 to-orange-600 bg-clip-text text-transparent text-5xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[156px]">Sell Your House</h1>
//                 <br />
//                 <h1 className="bg-gradient-to-r from-emerald-200 via-yellow-600 to-orange-600 bg-clip-text text-transparent text-5xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[156px]">Fast For Cash!</h1>
//               </div>
              
//             </div>
//             <div className="px-4">
//               <ContactForm />
//             </div>
//           </div>
//       </div> */}

      

      