import mongoose, { Document, Schema } from 'mongoose'

export interface MemberDocument extends Document {
  name: string
  age: number
  nick: string
  role: string
  might: number
  level: number
  castle: number
  status: string
}

const MemberSchema = new Schema(
  {
    name: { type: String, required: false },
    age: { type: Number, required: false },
    nick: { type: String, required: true },
    role: { type: String, required: true },
    might: { type: Number, required: false },
    level: { type: Number, required: false },
    castle: { type: Number, required: false },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<MemberDocument>('Member', MemberSchema)
