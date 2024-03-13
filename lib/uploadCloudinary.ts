export const uploadCloudinary = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        `xycqiw1f`
      );
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL === undefined ? process.env.CLOUDINARY_URL : process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      return { url: data?.secure_url };
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw new Error("Error uploading to Cloudinary");
    }
  };