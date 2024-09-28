import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";


export async function POST(request: Request) {
    await dbConnect();

    const { email } = await request.json();
    try {
        const data = await UserModel.findOne({ email: email });
        if (!data) {
            return Response.json({
                status: false,
                message: "could not find user with the given email"
            }, { status: 403 })
        }
        return Response.json({
            status: true,
            data: data,
        }, { status: 200 })
    } catch (error) {
        return Response.json({
            status: false,
            message: error
        }, { status: 500 })
    }
}