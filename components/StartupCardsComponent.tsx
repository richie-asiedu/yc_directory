import Image from "next/image";
import Link from "next/link";
import { StartupCard } from "./StartupCards";

interface StartupCardsProps {
  startups: StartupCard[];
  loading?: boolean;
  error?: string | null;
}

export function StartupCards({ startups, loading, error }: StartupCardsProps) {
    if (loading) {
        return (
            <div className="col-span-full text-center text-gray-500 text-xl py-10">
                <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                    Loading Startups...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="col-span-full text-center text-red-500 text-xl py-10">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                    {error}
                </div>
            </div>
        );
    }

    if (startups.length > 0) {
        return (
            <>
                {startups.map((card, index) => {
                    return (
                    <div
                        key={card._id || card.id || `card-${index + 1}`}
                        className={`bg-white hover:bg-pink-100 rounded-[2rem] shadow-6xl p-6 flex flex-col h-full relative border-8 border-black transition-colors duration-200 hover:border-[#EE2B69] ${card.highlight ? "border-black-500" : ""}`}
                        style={{ minHeight: 420 }}
                    >
                        <div className="flex justify-between items-center mb-5 border-black">
                            <span className="bg-pink-100 text-black text-base font-semibold px-3 py-2 rounded-full">
                                {(() => {
                                    const dateField = card._createdAt || (card as unknown as { createdAt?: string }).createdAt || card.date || (card as unknown as { created?: string }).created || (card as unknown as { publishedAt?: string }).publishedAt;
                                    if (!dateField) return 'Recent';
                                    const dt = new Date(dateField);
                                    if (isNaN(dt.getTime())) return 'Recent';
                                    const parts = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).formatToParts(dt);
                                    const day = parts.find((p) => p.type === 'day')?.value || '';
                                    const month = parts.find((p) => p.type === 'month')?.value || '';
                                    const year = parts.find((p) => p.type === 'year')?.value || '';
                                    return `${day} ${month}, ${year}`;
                                })()}
                            </span>
                            <span className="flex items-center gap-1 text-black text-lg font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 color-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {card.views}
                            </span>
                        </div>
                        <div className="flex items-center justify-between mb-1">
                            <div>
                                <div className="text-base font-semibold text-black leading-tight mb-4">
                                    {typeof card.author === 'object' && card.author?.name ? card.author.name : (typeof card.author === 'string' ? card.author : "Anonymous")}
                                </div>
                                <div className="text-[26px] font-extrabold text-black leading-tight font-sans">{card.title}</div>
                            </div>
                            {(() => {
                                const authorName = (typeof card.author === 'object' && card.author?.name)
                                  ? card.author.name
                                  : (typeof card.author === 'string' ? card.author : 'Anonymous');
                                const avatarSrc = (typeof card.author === 'object' && card.author?.image)
                                  ? card.author.image
                                  : (card.avatar || `/avator${(index % 3) + 1}.png`);
                                const handle = card.mail || `@${String(authorName || '').toLowerCase().replace(/\s+/g, '')}`;
                                const href = `/profile?name=${encodeURIComponent(authorName)}&avatar=${encodeURIComponent(avatarSrc)}&handle=${encodeURIComponent(handle)}`;
                                return (
                                    <Link href={href} className="block">
                                        <Image
                                            src={avatarSrc}
                                            alt={`${authorName} avatar`}
                                            width={48}
                                            height={48}
                                            className="w-14 h-12 rounded-full object-cover border-1 border-white cursor-pointer"
                                            priority
                                        />
                                    </Link>
                                );
                            })()}
                        </div>
                        <div className="text-[#333333] text-[16px] mb-3 leading-snug line-clamp-2 font-sans">
                            {card.description}
                        </div>
                        <div className="w-full aspect-[2/1] rounded-xl overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border border-gray-200">
                            <Image
                                src={card.image}
                                alt="project"
                                width={400}
                                height={200}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                        <div className="flex justify-between items-center mt-auto pt-2">
                            <div className="flex flex-col">
                                <span className="text-[20px] text-black font-medium font-sans">{card.category}</span>
                                <span className="text-[18px] text-gray-600 font-medium">{(card as unknown as { level?: string }).level || 'Beginner'}</span>
                            </div>
                            <Link href={`/details?id=${card._id || card.id || index}`} className="bg-black text-white px-5 py-2 rounded-full font-sans font-semibold text-lg shadow hover:bg-[#EE2B69] transition-colors cursor-pointer">Details</Link>
                        </div>
                    </div>
                    );
                })}
            </>
        );
    }

    return (
        <div className="col-span-full text-center text-gray-500 text-xl py-10">No startups found.</div>
    );
}
