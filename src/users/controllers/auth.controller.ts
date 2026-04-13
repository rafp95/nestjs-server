import { Controller, Get, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Auth } from '../decorators/auth.decorator';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  me(@Auth('user') user: User, @Auth('accessToken') token: string) {
    return { user, token };
  }
}
