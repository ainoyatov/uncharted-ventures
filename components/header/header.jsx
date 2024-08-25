import Link from "next/link";
import Image from "next/image";
import {headerLinks} from "../../constants"


const HeaderMenu = () => {

    return (
        <div className="flex min-h-auto flex-row justify-center lg:justify-between px-4 md:px-8 sm:mt-12 lg:mt-0 w-[1900px]">
            <a className="flex h-[75px] max-lg:hidden items-center" href="/">
                <Image 
                    src="/google-logo.svg"
                    alt="main logo"
                    width={150}
                    height={50}
                />
            </a>
            <div className="flex h-[75px] max-sm:hidden">
                <ul className="flex justify-center items-center">
                    {headerLinks.map((links) => (
                        <li key={links.label} className="p-2 text-xl lg:text-2xl text-left hover:scale-125">
                            <Link
                                href={links.href}
                                className="p-2"
                            >
                                {links.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default HeaderMenu;