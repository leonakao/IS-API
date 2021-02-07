import mongoose, { Document, Schema } from 'mongoose'

export interface MemberDocument extends Document {
  name: string
  nick: string
  position: string
  might: number
  level: number
  castle: number
  status: string
}

const MemberSchema = new Schema(
  {
    name: { type: String, required: false },
    nick: { type: String, required: true },
    position: { type: String, required: true },
    might: { type: Number, required: false },
    level: { type: Number, required: false },
    castle: { type: Number, required: false },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<MemberDocument>('Message', MemberSchema)
