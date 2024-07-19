'use client';
// src/components/MyComponent.js
import React from 'react';
import { useGetSomeDataQuery } from '../lib/api';

export const LocallyHandledRequest = () => {
    const { data, error, isLoading } = useGetSomeDataQuery({
        skipGlobalErrorHandler: true,
    });

    if (error) {
        console.error('locally handled', error);
    }

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
