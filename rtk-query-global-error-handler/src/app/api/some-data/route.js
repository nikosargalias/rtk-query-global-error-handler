import { NextResponse } from 'next/server';

const friendlyResponseMessageMapper = {
    500: 'Oops! Something went wrong. Please try again later.',
    404: 'Oops! The resource you are looking for could not be found.',
    401: 'Oops! You are not authorized to access this resource.',
    403: 'Oops! You do not have permission to access this resource.',
    400: 'Oops! Bad request. Please check your input.',
    409: 'Oops! There was a conflict with the current state of the resource.',
};

// pages/api/some-data.js
export async function GET(req, res) {
    // console.log("It's been hit!");
    // res.json({ message: 'Internal Server Error' });
    return new NextResponse(friendlyResponseMessageMapper[500], {
        status: 500,
    });
}
