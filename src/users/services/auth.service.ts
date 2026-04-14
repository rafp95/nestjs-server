import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RequestPayload, TokenPayload, User } from '../entities/user.entity';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { StoreService } from '../../store/store.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private storeService: StoreService,
  ) {}

  async decodeUserToken(token: string): Promise<RequestPayload | null> {
    const payload: TokenPayload | null = await this.jwtService
      .verifyAsync(token)
      .catch(() => null);

    if (!payload) {
      return null;
    }

    const user = await this.storeService.findOneBy(User, { id: payload.sub });

    return user ? { user, token } : null;
  }

  async encodeUserToken(user: User): Promise<string> {
    const payload: TokenPayload = { sub: user.id };

    return this.jwtService.signAsync(payload);
  }

  async encodePassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
