import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { TasksModule } from './tasks/tasks.module.js';
import { UserController } from './user/user.controller.js';
import { UserService } from './user/user.service.js';
import { UserModule } from './user/user.module.js';
import { AuthModule } from './auth/auth.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TasksModule,
    UserModule,
    AuthModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
