import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    email: string;
    status: boolean;
}

const UserSchema: Schema<User> = new Schema({
    email: {
        type: String,
        required: [true, "Username is required"]
    },
    status: {
        type: Boolean,
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);
export default UserModel;