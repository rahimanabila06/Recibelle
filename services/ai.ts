import { GoogleGenAI, Type } from "@google/genai";

export interface AnalyzedItem {
  itemName: string;
  category: string;
  color: string;
  brand: string;
  size: string;
  season: string;
  tags: string[];
  description: string;
}

export const analyzeClothingItem = async (): Promise<AnalyzedItem> => {
  try {
    // Initialize the client inside the try block to handle cases where API_KEY might be missing or invalid
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // In a real scenario, we would pass the base64 image data here.
    // For this demo, we ask Gemini to generate details for the item shown in the background (White Linen Shirt).
    const model = "gemini-2.5-flash";
    const prompt = "Analyze a high-quality white linen button-down shirt. Provide fashion details including name, category, color, likely brand (guess Everlane), size (guess M), season, related tags, and a short description.";

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            itemName: { type: Type.STRING },
            category: { type: Type.STRING },
            color: { type: Type.STRING },
            brand: { type: Type.STRING },
            size: { type: Type.STRING },
            season: { type: Type.STRING },
            tags: { type: Type.ARRAY, items: { type: Type.STRING } },
            description: { type: Type.STRING },
          },
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AnalyzedItem;
  } catch (error) {
    console.error("AI Analysis failed", error);
    // Fallback data if API key is missing or error occurs
    return {
      itemName: "White Linen Shirt",
      category: "Tops > Shirts",
      color: "White",
      brand: "Everlane",
      size: "M",
      season: "Summer, Spring",
      tags: ["casual", "work", "linen", "minimalist"],
      description: "A classic white linen shirt with a relaxed fit. Breathable fabric perfect for warm weather.",
    };
  }
};