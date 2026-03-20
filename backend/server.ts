import express from "express";
import helmet from "helmet";
import connectDB from "./src/lib/db.ts";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.router.ts"
import cors from "cors";
import passport from "./src/config/passport.ts";
import session from "express-session";
const app = express();

const PORT = process.env.PORT || 3000;


// cors
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

// session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// passport
app.use(passport.initialize());
app.use(passport.session());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// helmet for using security headers
app.use(helmet());

// cookie parser
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);


function startServer() {
    connectDB();
    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();
