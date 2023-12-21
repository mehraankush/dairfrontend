import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full">
                <Link href='/'>
                    <Image src='/logo.png'
                        width={200}
                        height={130}
                        alt="Dair Logo" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar