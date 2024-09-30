import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    email: string;
    isRegister: boolean;
    isSubmit: boolean;
}

const UserSchema: Schema<User> = new Schema({
    email: {
        type: String,
        required: [true, "Username is required"]
    },
    isRegister: {
        type: Boolean,
        default: false
    },
    isSubmit: {
        type: Boolean,
        default: false
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);
export default UserModel;