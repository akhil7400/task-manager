import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto.js';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);

    if(!user) {
        throw new UnauthorizedException("Invalid Email or Password!")
    }

    const isPasswordValid = await argon2.verify(user.password, password)

    if(!isPasswordValid) {
        throw new UnauthorizedException("Invalid Email or Password!")
    }

    const payload = {
        sub: user.id,
        email: user.email
    }

    const accessToken = await this.jwtService.signAsync(payload)

    return {
        accessToken: accessToken,
        user: {
            id: user.id,
            email: user.email,
            name:user.name
        }
    }
  }
}
