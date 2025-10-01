import Image from "next/image";
import { StartupCards } from "@/components/StartupCardsComponent";
import { defaultStartupCards } from "@/components/StartupCards";
import Navbar from "@/components/Navbar";

export default function ProfilePage({ searchParams }: { searchParams?: { name?: string; avatar?: string; handle?: string } }) {
  const cards = defaultStartupCards.slice(0, 6);
  const authorName = (searchParams?.name || "Nathan Smith");
  const badgeName = authorName.toUpperCase();
  const handle = (searchParams?.handle || "@nathansmith");
  const avatarSrc = (searchParams?.avatar || "/Profile.png");

  return (
    <> 
     <Navbar />
    <section className="w-full bg-[#F7F7F7] min-h-screen py-10 px-3 md:px-8 mt-[8%] sm:mt-[4%] font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="relative">
          <div className="bg-[#EE2B69] rounded-[2rem] border-8 border-black shadow-6xl p-6 lg:sticky lg:top-6">
            <div className="absolute -top-4 left-6">
              <span className="bg-white border-4 border-black rounded-full px-4 py-2 text-black font-extrabold tracking-wide">
                {badgeName}
              </span>
            </div>

            <div className="mt-10 flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full border-8 border-black bg-white overflow-hidden shadow-xl">
                <Image
                  src={avatarSrc}
                  alt={`${authorName} avatar`}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="mt-6">
                <div className="text-white text-2xl md:text-3xl font-extrabold">{handle}</div>
                <p className="text-white/90 text-base md:text-lg mt-2">
                  Next.js Enthusiast & Educator
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <StartupCards startups={cards} />
          </div>
          </div>
        </div>
      </section>
    </>
  );
}