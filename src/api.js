export async function fetchProducts() {
  try {
    const response = await fetch("https://api.sprocket.com/v1/products", {
      headers: {
        Authorization: `Bearer ${process.env.SPROCKET_TOKEN || "YOUR_SPROCKET_TOKEN"}`
      }
    });
    if (!response.ok) throw new Error("Failed to fetch products.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
