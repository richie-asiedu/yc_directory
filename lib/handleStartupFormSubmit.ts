import { z } from "zod";

export type StartupFormState = {
  success: boolean;
  error: string | null;
  timeout?: number;
};

export type StartupFormFields = {
  title: string;
  description: string;
  category: string;
  media: string;
  pitch: string;
};

const StartupFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  media: z.string().optional(),
  pitch: z.string().optional(),
});

export async function handleStartupFormSubmit(
  formData: FormData
): Promise<StartupFormState> {
  const fields = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as string,
    media: formData.get("media") as string,
    pitch: formData.get("pitch") as string,
  };
  try {
    const parsed = StartupFormSchema.safeParse(fields);
    if (!parsed.success) {
      const errorMsg = parsed.error.issues[0]?.message || "Validation failed";
      throw new Error(errorMsg);
    }
    const response = await fetch("/api/startup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed.data),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Submission failed");
    }
  return { success: true, error: null, timeout: 800 };
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage, timeout: 800 };
  }
}