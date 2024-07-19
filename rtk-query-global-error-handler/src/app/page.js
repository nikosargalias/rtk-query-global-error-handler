'use client';
import { Provider } from 'react-redux';
import store from '../lib/store';

import React from 'react';

import { LocallyHandledRequest } from '../components/LocalHandledRequest';
import { GloballyHandledRequest } from '@/components/GlobalHandledRequest';
import Snackbar from '@/components/Snackbar';

function MyApp() {
    return (
        <Provider store={store}>
            <LocallyHandledRequest />;
            <GloballyHandledRequest />;
            <Snackbar />
        </Provider>
    );
}

export default MyApp;
