import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { StoreService } from '../../store/store.service';
import { Role, RoleNames, User } from '../entities/user.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class RoleByNamePipe implements PipeTransform {
  constructor(private readonly storeService: EntityManager) {}

  async transform(name: RoleNames, metadata: ArgumentMetadata): Promise<Role> {
    const role = await this.storeService.findOneBy(Role, { name });

    if (!role) throw new BadRequestException('Role not found');

    return role;
  }
}
