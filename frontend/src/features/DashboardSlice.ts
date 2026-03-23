import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DashboardState {
    loading: boolean;
    error: string | null;
    resume: unknown;
}

const initialState: DashboardState = {
    loading: false,
    error: null,
    resume: null,
}

export const uploadResume = createAsyncThunk<unknown, File, { rejectValue: string }>(
    "dashboard/uploadResume",
    async (resume: File, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append("resume", resume);

            const response = await axios.post(
                "http://localhost:3000/api/dashboard/upload-resume",
                formData,
                {
                    withCredentials: true,
                },
            );

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = (error.response?.data as { message?: string } | undefined)?.message;
                return rejectWithValue(errorMessage ?? "Failed to upload resume.");
            }

            return rejectWithValue("Failed to upload resume.");
        }
    }
);

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadResume.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(uploadResume.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.resume = action.payload;
            })
            .addCase(uploadResume.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? action.error.message ?? "Failed to upload resume.";
            });
    },
});

export const { clearError } = dashboardSlice.actions;
export default dashboardSlice.reducer;

