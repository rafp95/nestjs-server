import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExceptionResponse, RoleNames, User } from '../entities/user.entity';
import { Auth } from '../decorators/auth.decorator';
import {
  AuthDto,
  AuthLoginDto,
  AuthLoginResponseDto,
  AuthRegisterDto,
} from '../dto/auth.dto';
import { ApiAuth } from '../decorators/api-auth.decorator';
import { StoreService } from '../../store/store.service';
import { AuthService } from '../services/auth.service';
import { PerformanceInterceptor } from '../interceptors/performance.interceptor';
import { UserExceptionFilter } from '../filters/user-exception.filter';

@Controller('auth')
@ApiTags('Auth')
@UseFilters(UserExceptionFilter)
export class AuthController {
  constructor(
    private readonly storeService: StoreService,
    private readonly authService: AuthService,
  ) {}

  @Get('me')
  @ApiAuth(RoleNames.ADMIN)
  me(@Auth('user') user: User, @Auth('token') token: string): AuthDto {
    return { user, token };
  }

  @Post('register')
  @ApiAuth(RoleNames.ADMIN)
  @UseInterceptors(PerformanceInterceptor)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  async register(@Body() data: AuthRegisterDto): Promise<User> {
    let user: User = await this.storeService.findOneBy(User, {
      email: data.email,
    });

    if (user) {
      throw new BadRequestException(`User already exists`);
    }

    const password = await this.authService.encodePassword(data.password);
    user = new User({
      ...data,
      password,
    });

    await this.storeService.save(user);

    return user;
  }

  @Post('login')
  async login(
    @Body(ValidationPipe) data: AuthLoginDto,
  ): Promise<AuthLoginResponseDto> {
    const user: User = await this.storeService.findOneBy(User, {
      email: data.email,
    });

    if (!user) {
      throw new BadRequestException(`Bad credentials`);
    }

    const isValid = await this.authService.validatePassword(
      data.password,
      user.password,
    );
    if (!isValid) {
      throw new BadRequestException(`Bad credentials`);
    }
    const token = await this.authService.encodeUserToken(user);

    return { token, user };
  }
}
