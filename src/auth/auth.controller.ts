import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

constructor(private readonly authService : AuthService){};

@Get('users/:id')
async getUser(@Param('id') id:string){
    const user = await this.authService.getUserDatabyID(id)
    console.log(user,"User by id")
    return user

}


@Post('register')
register(@Body() data:{name:string;
              email:string;
              password:string;
              role:string}){
    const result = this.authService.registerUser(data); return result;
}
}
