import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { AppService } from '../../app.service';
import { StoreService } from '../../store/store.service';
import { User } from '../entities/user.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserByIdPipe implements PipeTransform {
  constructor(private readonly storeService: EntityManager) {}

  async transform(value: string, metadata: ArgumentMetadata): Promise<User> {
    const id = +value;

    if (!id) throw new BadRequestException('Invalid user id');

    const user = await this.storeService.findOneBy(User, { id });

    if (!user) throw new BadRequestException('User not found');

    return user;
  }
}
