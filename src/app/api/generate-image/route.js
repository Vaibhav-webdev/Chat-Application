import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("API KEY:", process.env.OPENAI_API_KEY);
    const { count, aspect, style, colorTheme, prompt } = await req.json();
    console.log(count, aspect, style, colorTheme, prompt)
    
    let size = "1024x1024";

if (aspect === "16:9") size = "1536x1024";
if (aspect === "9:16") size = "1024x1536";
if (aspect === "1:1") size = "1024x1024";
    
const finalPrompt = `Create a high-quality YouTube thumbnail with the following specifications:
- Video Title: ${count}
- Aspect Ratio: ${aspect}
- Color Scheme: ${colorTheme}
- Style: ${style}
- Additional Notes: ${prompt}

Make the design:
- Eye-catching, bold, and readable
- Faceless if possible
- Optimized for digital viewing
- Ensure the text is clear and visually appealing

Output should be a professional thumbnail image suitable for YouTube or social media.`

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: finalPrompt,
      quality: "high",
      size: size
    });

    return NextResponse.json({
      image: result.data[0].url,
    });

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
