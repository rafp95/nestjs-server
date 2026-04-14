import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ExceptionResponse, RoleNames } from '../entities/user.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Roles } from './roles.decorator';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

export const ApiAuth = (...roles: RoleNames[]) =>
  applyDecorators(
    UseGuards(JwtAuthGuard),
    Roles(...roles),
    ApiBearerAuth(),
    ApiResponse({
      status: 401,
      description: 'Authentication failed',
      type: ExceptionResponse,
    }),
    ApiResponse({
      status: 403,
      description: 'Extra roles required',
      type: ExceptionResponse,
    }),
  );
