import danceFloorShema from "@/models/danceFloorShema";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    try {
        await connect();

        const danceFloorCharacters = await danceFloorShema.find();
        return new NextResponse(JSON.stringify(danceFloorCharacters), {
            status: 200,
        });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
