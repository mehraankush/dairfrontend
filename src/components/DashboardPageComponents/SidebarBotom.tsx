import Image from 'next/image'
import Link from 'next/link'

const SidebarBottom = () => {

    return (
        <div className='mb-3'>
            <div className='flex justify-content-center'>
                <Link
                    href={'/service'}
                    className={`flex p-3 px-4 mt-1 cursor-pointer border-round-xl bg-pink-100 text-black-alpha-90 hover:bg-blue-800 hover:text-white hover:brightness-1`}
                   >
                    <div className={`flex items-center gap-3 md:ml-3`}>
                        <Image alt="Icons" width={20} height={20} src={'/sidebar/headphone.svg'}
                        />
                        <p className={`font-medium text-md`}>Control service</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SidebarBottom