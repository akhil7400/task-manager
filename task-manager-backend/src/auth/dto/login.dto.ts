import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {

    @ApiProperty({
            example: 'john.doe@email.com',
            description: 'Email ID of the user'
        })
    @IsEmail()
    email: string;

    @ApiProperty({
            example: 'password123',
            description: 'Password of the user'
        })
    @IsString()
    @IsNotEmpty()
    password: string;
}