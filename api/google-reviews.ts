import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    const API_KEY = process.env.GOOGLE_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`
    );

    const data = await response.json();

    console.log("Google API response:", data);

    res.status(200).json(data);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}