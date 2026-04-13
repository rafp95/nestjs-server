import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { RoleNames } from '../entities/user.entity';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}

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

    // get required roles
    const requredRoles: RoleNames[] =
      this.reflector.get(ROLES_KEY, context.getHandler()) || [];

    // if empty allow
    if (!requredRoles || !requredRoles.length) {
      return true;
    }

    // get user roles
    const userRoles: RoleNames[] =
      request.payload.user.roles?.map((role) => role.name) || [];

    // check if user has required roles
    if (!requredRoles.some((role) => userRoles.includes(role))) {
      throw new ForbiddenException(
        `This endpoint requires one of ${requredRoles.join(', ')} roles`,
      );
    }

    return true;
  }
}
