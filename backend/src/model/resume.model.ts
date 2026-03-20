import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    fileUrl: {
        type: String,
    },
    originalName: {
        type: String,
    },
    parsedData: {
        skills: {
            type: [String],
            default: []
        },
        experience: {
            type: [String],
            default: []
        },
        education: {
            type: [String],
            default: []
        },
        projects: {
            type: [String],
            default: []
        },
        certifications: {
            type: [String],
            default: []
        }, 
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
    
})

export const Resume = mongoose.model("Resume", resumeSchema);

// index for faster retrieval
resumeSchema.index({ userId: 1 , createdAt: -1 });