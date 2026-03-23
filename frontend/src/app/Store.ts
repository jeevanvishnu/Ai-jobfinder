import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/AuthSlice.ts"
import dashboardReducer from "../features/DashboardSlice.ts"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        dashboard:dashboardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;