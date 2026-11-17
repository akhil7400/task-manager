import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Learn NestJS',
    description: 'Title of the task',
  })
  @IsString()
  @MinLength(1)
  title: string;

    @ApiPropertyOptional({
    example: 'User ID',
    description: 'ID of the user',
  })
  @IsString()
  userId: string;

  @ApiPropertyOptional({
    example: 'Complete the Task Manager CRUD API',
    description: 'Description of the task',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: false,
    description: 'Completion status of the task',
  })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}