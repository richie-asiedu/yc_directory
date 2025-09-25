import Navbar from "@/components/Navbar"
import StartupForm from "@/components/StartupForm"

const page = () => {
    return (
        <>
          <Navbar />
             
            <div className="w-full bg-[#EE2B69] min-h-[230px] mb-8 mt-[3%] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{background: "repeating-linear-gradient(90deg,rgba(255, 255, 255, 0.37) 0 3px,transparent 8px 70px)"}} />
                <h1 className="relative z-10 text-2xl md:text-[35px] font-extrabold text-white text-center tracking-wide">
                    <span className="flex justify-center text-center bg-black px-8 py-5 rounded shadow-lg inline-block font-sans md:mt-[6%] mt-[20%] font-extrabold">SUBMIT YOUR STARTUP PITCH</span>
                </h1>
            </div>

            <StartupForm />

        </>
    )
}

export default page
