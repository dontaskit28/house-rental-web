import { NextResponse } from "next/server";

export default function middleware(req){
    const url = req.url;
    if (url.includes('/checkout')){
        return NextResponse.redirect('http://localhost:3000/login')
    }
    return NextResponse.next()
}