import { Schema, model } from "mongoose";

export interface Data {
  id:string;
  url:string
  secretkey:string
  commit:boolean
  push:boolean
  merge:boolean
}

export const DataSchema = new Schema<Data>(
  {
    url: { type: String, required: true },
    secretkey:{type:String, required: true },
    commit: { type: Boolean, default:false },
    push: { type: Boolean, default:false },
    merge: { type: Boolean, default:false }
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
 
);

export const DataModel=model<Data>('data',DataSchema)
