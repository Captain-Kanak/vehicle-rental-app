import { env } from "@/env";

export const uploadImageToImgBB = async (
  image: File,
): Promise<string | null> => {
  const formData = new FormData();
  formData.append("image", image);

  const apiKey = env.NEXT_PUBLIC_IMGBB_API_KEY;
  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

  try {
    const response = await fetch(url.toString(), {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      return result.data.display_url;
    } else {
      console.error(
        "ImgBB Upload Error:",
        result.error?.message || "Unknown error",
      );

      return null;
    }
  } catch (error) {
    console.error("Failed to upload image to ImgBB:", error);
    return null;
  }
};
