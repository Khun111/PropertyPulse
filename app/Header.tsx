import Image from "next/image";
import Head from "./Header.module.css"
import Link from "next/link";
const NavBar = () => {
    return (
        
            <nav className="bg-[#1D4734] flex justify-between px-3 w-full mb-6">
                <div className="flex-auto w-1/12">
                    LiveInvest
                </div>
                <nav className="inline-flex flex-auto border-2 py-2 rounded-xl w-2/6 justify-around bg-[#E6E8EE] text-[#050505] ">
                    <p>Home</p>
                    <p>Properties</p>
                    <p>Buy</p>
                    <p>Contact</p>
                </nav>
                <div className="inline-flex w-1/8 bg-[#E6E8EE] justify-center border-2 rounded-2xl ml-7 px-2 text-[#050505] ">
                    <Link href="/login" className="self-center"> Login </Link>
                    <p className="self-center text-[#E6E8EE] bg-[#1D4734] ml-6 border-none rounded-xl px-1">Get Started</p>
                </div>
            </nav>
    )
}
const Header = () => {

    return (
    <>
            <header className={Head.header}>
                <div className={Head.wrapper}>
                    <NavBar/>
                <div className="text-[#E6E8EE] w-full grid md:grid-cols-2 sm:grid-cols-1 gap-y-6">
                    <div className="row-span-full">
                            <strong className="text-6xl uppercase text-left leading-relaxed tracking-tighter">Experience the epitome of home comfort.</strong>
                    </div>
                    <Image
                        src="/images/smart-home.jpg"
                        alt="One of our products"
                        width={400}
                        height={400}
                        className="row-span-3 mt-24 skew-x-6 rounded-full skew-y-6"
                    />
                    <div className="text-left leading-loose">
                        <p>Our international brand specializes in property appraisal, sales, purchases, and investments. Trust us to deliver exceptional service and help you find your perfect real estate opportunity.</p>
                    </div>
                    
                    <div>
                            <p>Your Best Place</p>
                    </div>
                </div>
                </div>
            </header>
    <main>
        <div className="wrapper"></div>
    </main>
    
        </>)
    
}
export default Header;