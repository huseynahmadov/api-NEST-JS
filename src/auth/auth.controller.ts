/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


@Controller('/auth/v1')
export class AuthController {

    

    constructor(private authService: AuthService) {}

    @Post('signup')
    signUp(@Body() dto: AuthDto) {
        
        return this.authService.signUp(dto);
    }

    @Post('signin')
    signIn(@Body() dto: AuthDto) {
        return this.authService.signIn(dto);
    }
}