import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/schemas/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class AuthService {
    constructor( private readonly usersService:UsersService){}

    registerUser(){
        const result = this.usersService.createUser()
        return result

}
}
