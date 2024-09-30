import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";


export async function POST(request: Request) {
    await dbConnect();

    const { email, isRegister, isSubmit } = await request.json();
    try {
        // check user is present or not
        const existingUser = await UserModel.findOne({ email: email });
        if (existingUser) {
            return Response.json({
                success: true,
                message: "User already registered",
            }, { status: 400 })
        }

        const result = await UserModel.create({ email: email, isRegister: isRegister, isSubmit: isSubmit });
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