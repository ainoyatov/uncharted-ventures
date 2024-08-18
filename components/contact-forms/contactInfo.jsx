import Image from 'next/image'
import Link from 'next/link'

const ContactInfo = ({icon,paragraph, href}) => {

    return (
        <div className='flex flex-row m-4 items-center'>
            
            <div className='w-14 h-14 mr-2 flex  items-center shadow-xl '>
                <Link
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    className=''
                >
                    <Image 
                        width={24}
                        height={24}
                        src={icon}
                        alt='contact form "contact-by" icons'
                        className='cursor-pointer' 
                    />
                </Link>
            </div>

            <div className='w-full'>
                <p className='text-white text-[16px] leading-7 w-60 items-center'>
                    <Link
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        className='cursor-pointer'
                    >
                        {paragraph}
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default ContactInfo