"use client"
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import { useStartupCards } from "./StartupCardContext";

interface StartupFormProps {
    onAddStartup?: (startup: {
        title: string;
        description: string;
        category: string;
        image: string;
        pitch: string;
    }) => void;
}

const StartupForm = ({ onAddStartup }: StartupFormProps) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [media, setMedia] = useState<string>("");
    const [pitch, setPitch] = useState<string>("");
    const [authorName, setAuthorName] = useState<string>("");
    const [authorEmail, setAuthorEmail] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

    const { addStartup } = useStartupCards();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);

        try {
            await addStartup({
                title,
                description,
                category,
                image: media || "/card.png",
                pitch,
                authorName: authorName || "Anonymous",
                authorEmail: authorEmail || undefined,
            });


            setTitle("");
            setDescription("");
            setCategory("");
            setMedia("");
            setPitch("");
            setAuthorName("");
            setAuthorEmail("");
            setSubmitSuccess(true);

            
            if (onAddStartup) {
                onAddStartup({
                    title,
                    description,
                    category,
                    image: media || "/card.png",
                    pitch,
                });
            }
        } catch (error) {
            console.error('Error submitting startup:', error);
            setSubmitError('Failed to submit startup. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center py-8">
            {submitError && (
                <div className="w-full max-w-xl mb-4 px-4">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                        {submitError}
                    </div>
                </div>
            )}
            {submitSuccess && !submitError && (
                <div className="w-full max-w-xl mb-4 px-4">
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
                        Startup pitch submitted successfully!
                    </div>
                </div>
            )}
            <form className="w-full max-w-xl bg-transparent flex flex-col gap-6 px-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block font-bold mb-1 text-[18px] font-sans">TITLE</label>
                    <input
                        name="title"
                        type="text"
                        className="w-full rounded-full border-3 border-black px-6 py-2 text-lg outline-none"
                        placeholder="Startup Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block font-bold mb-1 text-[18px] font-sans">DESCRIPTION</label>
                    <textarea
                        name="description"
                        className="w-full rounded-2xl border-3 border-black px-6 py-3 text-base outline-none min-h-[70px]"
                        placeholder="Startup Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block font-bold mb-1 text-[18px] font-sans">CATEGORY</label>
                    <input
                        name="category"
                        type="text"
                        className="w-full rounded-full border-3 border-black px-6 py-2 text-lg outline-none"
                        placeholder="Startup Category (Tech, Health, Education...)"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block font-bold mb-1 text-[18px] font-sans">IMAGE/VIDEO LINK</label>
                    <input
                        name="media"
                        type="url"
                        className="w-full rounded-full border-3 border-black px-6 py-2 text-lg outline-none"
                        placeholder="Paste a link to your demo or promotional media"
                        value={media}
                        onChange={e => setMedia(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block font-bold mb-1 text-[18px] font-sans">PITCH</label>
                    <div className="bg-white border-3 border-black rounded-2xl p-2">
                        <MDEditor
                            value={pitch}
                            onChange={value => setPitch(value || "")}
                            id="pitch"
                            preview="edit"
                            height={300}
                            style={{ borderRadius: 20, overflow: "hidden"}}
                            textareaProps={{
                                name: "pitch",
                                placeholder: "Briefly describe your idea and what problem it solves"
                            }}
                            previewOptions={{
                                disallowedElements: ["style"]
                            }}
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-bold mb-1 text-[18px] font-sans">AUTHOR NAME (OPTIONAL)</label>
                    <input
                        name="authorName"
                        type="text"
                        className="w-full rounded-full border-3 border-black px-6 py-2 text-lg outline-none"
                        placeholder="Your name (leave blank for Anonymous)"
                        value={authorName}
                        onChange={e => setAuthorName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block font-bold mb-1 text-[18px] font-sans">AUTHOR EMAIL (OPTIONAL)</label>
                    <input
                        name="authorEmail"
                        type="email"
                        className="w-full rounded-full border-3 border-black px-6 py-2 text-lg outline-none"
                        placeholder="Your email address"
                        value={authorEmail}
                        onChange={e => setAuthorEmail(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#EE2B69] hover:bg-[#d7266b] disabled:bg-gray-400 disabled:cursor-not-allowed text-white cursor-pointer font-extrabold font-sans text-lg rounded-full py-3 mt-2 shadow-md border-3 border-black flex items-center justify-center gap-2 transition-colors"
                >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT YOUR PITCH"}
                    {!isSubmitting && <Image src='/Vector.png' alt="vector" width={20} height={10} />}
                </button>
            </form>
        </div>
    );
};

export default StartupForm;
