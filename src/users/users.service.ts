import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel:Model<User>){}

    async createUser(data:{name:string;
        email:string;
        password:string;
        role:string})
    
    {
        const user = new this.userModel(data)
        return user.save()
    }
    async getUser(id:string){
        const user = this.userModel.findById(id)
        return user
    }
}

