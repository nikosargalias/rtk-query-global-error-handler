'use client';
// src/components/MyComponent.js
import React from 'react';
import { useGetSomeDataQuery } from '../lib/api';

export const GloballyHandledRequest = () => {
    const { data, error, isLoading } = useGetSomeDataQuery({
        skipGlobalErrorHandler: false,
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {data ? (
                <div>Data: {JSON.stringify(data)}</div>
            ) : (
                <div>No Data</div>
            )}
        </div>
    );
};
