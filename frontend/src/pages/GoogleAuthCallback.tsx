import { useEffect, useRef } from "react";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../app/Store";
import { fetchCurrentUser } from "../features/AuthSlice";

const GoogleAuthCallback = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const hasHandledCallback = useRef(false);

    useEffect(() => {
        if (hasHandledCallback.current) {
            return;
        }

        hasHandledCallback.current = true;

        const completeGoogleAuth = async () => {
            try {
                await dispatch(fetchCurrentUser()).unwrap();
                toast.success("Google sign-in successful");
                navigate("/dashboard", { replace: true });
            } catch (error) {
                const message =
                    typeof error === "string"
                        ? error
                        : "Unable to sign in with Google. Please try again.";
                toast.error(message);
                navigate("/login", { replace: true });
            }
        };

        void completeGoogleAuth();
    }, [dispatch, navigate]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#EEF2F6] px-4">
            <div className="rounded-2xl border border-gray-100 bg-white px-8 py-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-center gap-3 text-[14px] font-semibold text-gray-700">
                    <LoaderCircle className="h-5 w-5 animate-spin text-[#2563EB]" />
                    Completing Google sign-in...
                </div>
            </div>
        </div>
    );
};

export default GoogleAuthCallback;
