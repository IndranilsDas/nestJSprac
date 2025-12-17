import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/schemas/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class AuthService {
    constructor( private readonly usersService:UsersService){}

    registerUser(data:{name:string;
        email:string;
        password:string;
        role:string}){
        const result = this.usersService.createUser(data)
        return result
    
}
    async getUserDatabyID(id:string){
        const user = this.usersService.getUser(id)
        return user
    }
}
