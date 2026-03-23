import type { Request , Response } from "express";
import { PDFParse } from "pdf-parse";
import { prompt } from "../config/prompt.ts";
import { OpenRouter } from "@openrouter/sdk";
import 'dotenv/config';



export const uploadResume = async (req: Request , res: Response) => {
    try {
        // OpenRouter API key
        if(!process.env.OPENROUTER_API_KEY){
            return res.status(500).json({message: "OpenRouter API key is not configured"});
        }

        const file = req.file;
        if(!file){
            return res.status(400).json({message: "No file uploaded"});
        }
       
        if(file.mimetype !== "application/pdf"){
            return res.status(400).json({message: "Please upload a PDF file"});
        }

        const buffer = file.buffer;
        if(!buffer){
            return res.status(400).json({message: "Unable to read uploaded file"});
        }

        const parser = new PDFParse({ data: buffer });
        let resumeText = "";
        try {
            const data = await parser.getText();
            resumeText = data.text?.trim() ?? "";
        } finally {
            await parser.destroy();
        }


        if(!resumeText){
            return res.status(400).json({message: "No text found in the resume"});
        }

        // implement openrouter sdk
        const openRouter = new OpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY!,
    });

    const completion = await openRouter.chat.completions.create({
      model: "openai/gpt-oss-120b:free",
      messages: [
        {
          role: "user",
          content: `Analyze this resume and extract skills:\n${resumeText}`,
        },
      ],
    });

    const rawResponse =
      completion.choices?.[0]?.message?.content || "";

    if (!rawResponse) {
      return res.status(502).json({
        message: "AI provider returned an empty response",
      });
    }

    return res.status(200).json({ rawResponse });
        
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return res.status(error.status ?? 502).json({
                message: error.message || "AI provider request failed",
            });
        }
        return res.status(500).json({message: "Internal server error"});
    }
}
