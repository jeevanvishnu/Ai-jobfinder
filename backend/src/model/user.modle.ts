import mongoose from "mongoose";

interface IUser {
    name: string;
    email: string;
    password: string;
    refreshToken: { tokenHash: string; expiresAt: Date }[];
    googleId?: string;
}

const refreshTokenSchema = new mongoose.Schema({
   tokenHash:{
    type:String
   },
   expiresAt:{
    type:Date
   }
   
})

const userSchema = new mongoose.Schema<IUser>({

    googleId:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },
    password:{
        type:String,
      
    },
    refreshToken:[refreshTokenSchema]

},{timestamps:true});

// Speeds up auth lookups for login and refresh/logout token flows.
userSchema.index({ email: 1 }, { unique: true, name: "idx_user_email" });
userSchema.index({ "refreshToken.tokenHash": 1 }, { name: "idx_user_refresh_token_hash" });

const User = mongoose.model("User", userSchema);

export default User;
