'use client';

import { footerLinks, tosLinks, socialLinks } from "../../constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    }

    const tosYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justified-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justified-start items-start gap-6 cursor-pointer">
                    <Image 
                        src='/google-logo.svg'
                        alt="logo"
                        width={150}
                        height={35}
                        className="object-contain dark:invert"
                        priority
                        onClick={handleClick}
                    />

                    <p className="text-base text-gray-500">
                        Uncharted Ventures LLC {tosYear} <br />
                        All rights reserved &copy;
                    </p>

                </div>

                <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
                    {
                        footerLinks.map((link) => (
                            <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                                <h3>{link.title}</h3>
                                {link.links.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.url}
                                        className="text-gray-500"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))
                    }

                    {
                        socialLinks.map((link) => (
                                <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                                    <h3 className="">{link.title}</h3>
                                    {
                                        link.links.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.url}
                                                className="text-gray-500"
                                                target="_blank"
                                            >
                                                {item.title}
                                            </Link>
                                        ))
                                    }
                                </div>
                            )
                        )
                    }
                </div>
            </div>

            <div className="flex max-md:flex-col justify-between items-center flex-wrap border-t border-gray-200 md:px-16 px-6 py-10 gap-5">
                <div className="flex justified-start items-start">
                    <p className=" text-gray-500">@{tosYear} Uncharted Ventures LLC. All Rights Reserved.</p>
                </div>
                <div>
                    <ul>
                        { tosLinks.map((link) => (
                            <div key={link.title}>
                                {link.links.map((item) => (
                                    <li key={item.title} className="my-2 text-gray-500">
                                        <Link
                                            href={item.url}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        )) }
                    </ul>
                </div>
            </div>
                
            
        </footer>
    );
}

export default Footer;