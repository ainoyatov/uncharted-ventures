import Image from "next/image";
import ContactForm from '@/components/contact-forms/contactForm'
import ContactMiniForm from "@/components/contact-forms/contactMini";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-4 md:p-0 lg:p-4 ">
      <div className="z-10 w-full  items-center justify-between font-mono text-sm 2xl:text-lg lg:flex 4xl:justify-center p-4">
        <p className="fixed lg:mb-4 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-500 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Uncharted Ventures&nbsp;
          <code className="font-mono font-bold">LLC</code>
        </p>
      </div>

      <div className="relative max-md:hidden flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/modern-condo.jpeg"
          alt="Next.js Logo"
          width={3480}
          height={100}
          priority
        />

        <div className="absolute inset-0 grid grid-cols-2 place-items-center mx-2">
          <div className="flex flex-col space-y-4">
            <h1 className="bg-gradient-to-r from-white via-orange-600 to-white bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Sell Your House</h1>
            <h1 className="bg-gradient-to-r from-white via-orange-600 to-white bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Fast For Cash!</h1>
          </div>
          <div className="max-w-md backdrop-blur-md">
            <ContactMiniForm />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col place-items-center py-8  md:hidden">
        <div className="flex flex-col justify-center">
          <h1 className="h-32 bg-gradient-to-r from-amber-200 via-yellow-600 to-fuchsia-600 bg-clip-text text-transparent text-5xl ">Sell Your House</h1>
          <h1 className="h-32 bg-gradient-to-r from-fuchsia-300 via-yellow-600 to-orange-600 bg-clip-text text-transparent text-5xl ">Fast For Cash!</h1>
        </div>
        <div className=" bg-image-main bg-cover ">
          <div className="backdrop-blur-md">
            <ContactForm />
          </div>
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

      

      