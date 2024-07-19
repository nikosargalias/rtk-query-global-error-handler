'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSnackbar } from '../lib/snackbar/snackbarSlice';

const Snackbar = () => {
    const dispatch = useDispatch();
    const snackbar = useSelector((state) => state.snackbar);

    return (
        snackbar.open && (
            <div className='snackbar'>
                {snackbar.message}
                <button onClick={() => dispatch(hideSnackbar())}>Close</button>
            </div>
        )
    );
};

export default Snackbar;
