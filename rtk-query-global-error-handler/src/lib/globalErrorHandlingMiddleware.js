'use client';

// src/globalErrorHandlerMiddleware.js
import { isRejected, isRejectedWithValue } from '@reduxjs/toolkit';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { showSnackbar } from './snackbar/snackbarSlice';

const globalErrorHandlerMiddleware = createListenerMiddleware();

globalErrorHandlerMiddleware.startListening({
    matcher: isRejected,
    effect: async (action, listenerApi) => {
        const shouldSkipGlobalErrorHandler =
            action.meta?.arg?.originalArgs?.skipGlobalErrorHandler;

        if (!shouldSkipGlobalErrorHandler) {
            console.log('GloballyHandledRequest', action);
            //  Handle Erros
            listenerApi.dispatch(
                showSnackbar('An error occurred: ' + action.payload.error)
            );
            return;
        }
    },
});

export default globalErrorHandlerMiddleware;
