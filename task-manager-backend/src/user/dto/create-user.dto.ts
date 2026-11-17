import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator";


export class CreateUserDto {
    
    @ApiProperty({
        example: 'John Doe',
        description: 'Name of the user'
    })
    @IsString()
    @MinLength(1)
    name: string;

    @ApiProperty({
        example: 'john.doe@email.com',
        description: 'Email ID of the user'
    })
    @IsString()
    email: string;

    @ApiProperty({
        example: 'password123',
        description: 'User Password'
    })
    @IsString()
    password: string;

    @ApiPropertyOptional({
        example: true,
        description: 'Status of the User'
    })
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}