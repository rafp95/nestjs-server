import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const token: string =
      request.headers.authorization?.replace('Bearer ', '') || '';
    if (!token) {
      throw new UnauthorizedException('JWT token is required');
    }

    request.payload = await this.authService.decodeUserToken(token);
    if (!request.payload) {
      throw new UnauthorizedException('JWT token is invalid');
    }

    return true;
  }
}
