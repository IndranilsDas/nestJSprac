
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<User>;

export enum Role{
    Admin = 'admin',
    Student = 'student',


}

@Schema()
export class User {
  @Prop({required:true})
  name: string;

  @Prop({required:true,unique:true})
  email: string;

  @Prop({required:true})
  password: string;

  @Prop({required:true,default:Role.Student})
  role: string;
}

export const userSchema = SchemaFactory.createForClass(User);
