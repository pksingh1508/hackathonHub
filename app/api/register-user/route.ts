import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";


export async function POST(request: Request) {
    await dbConnect();

    const { email, status } = await request.json();
    try {

        const result = await UserModel.create({ email: email, status: status });
        if (!result) {
            return Response.json({
                status: false,
                message: "Something went wrong while creating the user"
            }, { status: 403 })
        }
        return Response.json({
            status: true,
            message: "Successfully created the user"
        }, { status: 200 })

    } catch (err) {
        return Response.json({
            status: false,
            message: err
        }, { status: 500 })
    }

}