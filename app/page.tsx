import Image from "next/image";
import ContactForm from '@/components/contact-forms/contactForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-0 p-4">
      <div className="z-10 w-full  items-center justify-between font-mono text-sm lg:flex 4xl:justify-center p-4">
        <p className="fixed lg:mb-4 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-500 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Uncharted Ventures&nbsp;
          <code className="font-mono font-bold">LLC</code>
        </p>
      </div>

      <div className="relative z-[-1] max-md:hidden flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/modern-condo.jpeg"
          alt="Next.js Logo"
          width={3480}
          height={100}
          priority
        />

        <div className="absolute inset-0 grid grid-cols-2 place-items-center mx-2">
          <div className="">
            <h1 className=" bg-gradient-to-r from-amber-200 via-yellow-600 to-orange-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Sell Your House</h1>
            <h1 className="bg-gradient-to-r from-emerald-200 via-yellow-600 to-orange-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Fast For Cash!</h1>
          </div>
          <div className="max-w-md backdrop-blur-md">
            <form className="border-orange-400 border-4 p-2">
              <div className='mb-2 flex justify-center'>
                <p className="text-blue-700 font-bold text-sm lg:text-lg 2xl:text-2xl">Get Free No-Obligation Offer Now!</p>
              </div>
              <div className='flex flex-row place-items-center mb-2'>
                <div className="flex flex-col">
                  <div className='flex p-2 items-center justify-center w-6 h-6 bg-blue-500 text-white text-xl rounded-full'>1</div>
                  <div className="text-[8px] text-slate-600">Contact Information</div>
                </div>
                <div className='flex flex-col w-full h-px bg-blue-500 mx-4'></div>
                <div className="flex flex-col">
                  <div className='flex p-2 items-center justify-center w-6 h-6 bg-blue-500 text-white text-xl rounded-full'>2</div>
                  <div className="text-[8px] text-slate-600">Property Details</div>
                </div>

                
              </div>  
              <div className='mb-2'>
                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Property Address" required />
              </div>
              <div className="grid gap-2 mb-2 md:grid-cols-3">
                <div>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
                </div>
                <div>
                  <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
                </div>
                <div>
                  <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zipcode" required />
                </div>
              </div>
              <div className="mb-2">
                <input type="full-name" placeholder="Full Name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="grid gap-2 mb-2 md:grid-cols-2">
                <div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
                <div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required/>
                </div>
              </div>
              
              <div className="flex items-start p-2">
                <div className="flex items-center h-3">
                <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-[8px] text-slate-50 dark:text-gray-300">By submitting this request for information, I hereby agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Terms Of Use and Privacy Policy</a> and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.</label>
              </div>
              <div className="py-2">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-0.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Cash Offer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center md:hidden">
        <div className="">
          <h1 className="mb-4 bg-gradient-to-r from-amber-200 via-yellow-600 to-fuchsia-600 bg-clip-text text-transparent text-5xl ">Sell Your House</h1>
          <h1 className="bg-gradient-to-r from-fuchsia-300 via-yellow-600 to-orange-600 bg-clip-text text-transparent text-5xl ">Fast For Cash!</h1>
        </div>
        <div className="p-2 py-8 max-w-4xl">
          <ContactForm />
        </div>
      </div>

      <div className="m-16 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
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

      

      