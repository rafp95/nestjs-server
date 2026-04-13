import { Controller, Get, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoleNames, User } from '../entities/user.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Auth } from '../decorators/auth.decorator';
import { Roles } from '../decorators/roles.decorator';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  @Get('me')
  @UseGuards(JwtAuthGuard)
  @Roles(RoleNames.ADMIN)
  @ApiBearerAuth()
  me(@Auth('user') user: User, @Auth('token') token: string) {
    return { user, token };
  }
}
