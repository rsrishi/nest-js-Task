import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth.credentials';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService,
    ){}
    @Post('/signup')
    async signUp(@Body() authCredentialsDto:AuthCredentialsDto):Promise<any>{
        //return authCredentialsDto;
        return await this.authService.signUp(authCredentialsDto);
    }
}
