'use client';
import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import globalErrorHandlerMiddleware from './globalErrorHandlingMiddleware';
import snackbar from './snackbar/snackbarSlice';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [snackbar.reducerPath]: snackbar.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            api.middleware,
            globalErrorHandlerMiddleware.middleware
        ),
});

export default store;
