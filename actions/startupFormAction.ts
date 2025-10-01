export async function startupFormAction(prevState: any, formData: FormData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const media = formData.get("media");
    const pitch = formData.get("pitch");
    try {
        if (!title || !description || !category) {
            throw new Error("Please fill in all required fields.");
        }
        const response = await fetch("/api/startup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, category, media, pitch })
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || "Submission failed");
        }
        return { success: true, error: null };
    } catch (error) {
        return { success: false, error: (error as Error).message || "Unknown error" };
    }
}
