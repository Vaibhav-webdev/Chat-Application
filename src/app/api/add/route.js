import { NextResponse } from "next/server";
import User from "../../../models/User";
import { connectDB } from "../../../lib/db";
import { auth } from "../../auth";

export async function POST(request) {
    try {
        const { image , title, aspect, style, colorTheme } = await request.json()
        
        const session = await auth()
        const email = session.user.email

        await connectDB()
        
        const user = await User.findOneAndUpdate(
            { email: email },
            {
                $push: {
                    thumbnails: {
                        image: image,
                        title: title,
                        aspect: aspect,
                        style: style,
                        color: colorTheme
                    }
                }
            }
        )
        return NextResponse.json({
            success: true,
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
        })
    }
}