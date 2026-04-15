import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { StoreModule } from '../store/store.module';
import { UsersAdminController } from './controllers/users-admin.controller';
import { ConfigModule, ConfigService } from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './respository/user.repository';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [
    PrismaModule,
    StoreModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.JWT_SECRET,
        signOptions: { expiresIn: '4d' },
      }),
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController, UsersAdminController],
  providers: [UsersService, AuthService, UserRepository],
  exports: [UsersService, AuthService, TypeOrmModule, UserRepository],
})
export class UsersModule {}
