import { MemberDocument } from '@models/Member';
import mongoose, { Document, Schema } from 'mongoose'

export interface UserDocument extends Document {
  username: string
  password: string
  member: string | MemberDocument
}

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    member: { type: Schema.Types.ObjectId, ref: 'Member', required: true }
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<UserDocument>('User', UserSchema)
