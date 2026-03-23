import type { Request , Response } from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");
import { OpenAI } from "openai";
import { prompt } from "../config/prompt.ts";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const uploadResume = async (req: Request , res: Response) => {
    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        
        // openai api key
        if(!process.env.OPENAI_API_KEY){
            return res.status(500).json({message: "OpenAI API key is not configured"});
        }

        let resumeText = "";
        const file = req.file;
        if(!file){
            return res.status(400).json({message: "No file uploaded"});
        }
       
        if(file.mimetype !== "application/pdf"){
            return res.status(400).json({message: "Please upload a PDF file"});
        }

        const buffer = file.buffer;
        const data = await pdf(buffer);
        resumeText = data.text;
        console.log(resumeText);


        if(!resumeText){
            return res.status(400).json({message: "No text found in the resume"});
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            input: prompt + resumeText,
            
        });
        const rawResponse = await response.output_text
        let parsedSkills = [];
        try {
            parsedSkills = JSON.parse(rawResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Failed to parse skills"});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
}