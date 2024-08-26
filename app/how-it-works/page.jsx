
'use client';
import Image from "next/image";

export default function Home() {
    return (
    <div className="flex">
        <div className="w-full h-screen bg-image-landing-page bg-cover bg-no-repeat">
            <div className="flex flex-col p-8">
                <div className='text-black text-6xl'>Under</div>
                <div className='text-black text-6xl'>Construction...</div>
            </div>
        </div>
    </div>
    );
}

