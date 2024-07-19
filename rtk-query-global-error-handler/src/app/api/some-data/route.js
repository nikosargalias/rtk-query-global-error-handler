import { NextResponse } from 'next/server';

// pages/api/some-data.js
export async function GET(req, res) {
    // console.log("It's been hit!");
    // res.json({ message: 'Internal Server Error' });
    return new NextResponse('fioo', {
        status: 500,
    });
}
