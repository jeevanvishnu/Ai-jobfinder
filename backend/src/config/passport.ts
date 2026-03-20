import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../model/user.modle.ts";
import sendEmail from "../emails/resend.ts";
import "dotenv/config";
passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENTID as string,
        clientSecret: process.env.GOOGLE_SECRECTID as string,
        callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    async (accessToken: string, refreshToken: string, profile: any, done: any) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
          
          if (email) {
            user = await User.findOne({ email });
          }

          if (user) {
            // Link googleId to existing user
            user.googleId = profile.id;
            await user.save();
          } else {
            // Create a new user
            user = await User.create({
              googleId: profile.id,
              name: profile.displayName || "Google User",
              email: email || `${profile.id}@google.com`,
             
            });
            sendEmail(user.name, user.email, process.env.CLIENT_URL);
          }
        }
        
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    })
)

passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id: any, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
export default passport;