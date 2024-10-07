import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";


export async function POST(request: Request) {
    await dbConnect();

    const { email, isRegister, isSubmit } = await request.json();
    try {
        const data = await UserModel.findOneAndUpdate(
            { email: email },
            { isRegister: isRegister, isSubmit: isSubmit },
            { returnDocument: 'after' } // This ensures that the updated document is returned
        );
        if (!data) {
            return Response.json({
                status: false,
                message: "could not update user with the given email"
            }, { status: 404 })
        }
        return Response.json({
            status: true,
            data: data,
            message: "User updated successfully"
        }, { status: 200 })
    } catch (error) {
        return Response.json({
            status: false,
            message: error
        }, { status: 500 })
    }
}