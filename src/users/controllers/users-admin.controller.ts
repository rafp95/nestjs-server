import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { Role, RoleNames, User } from '../entities/user.entity';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserByIdPipe } from '../pipes/user-by-id.pipe';
import { RoleByNamePipe } from '../pipes/role-by-name.pipe';
import { AddRoleDto } from '../dto/admin.dto';
import { UsersService } from '../services/users.service';
import { StoreService } from '../../store/store.service';

@Controller('users-admin')
@ApiTags('UserAdmin')
export class UsersAdminController {
  constructor(private readonly storeService: StoreService) {}

  @Post('/user/add-role')
  @ApiBody({
    type: AddRoleDto,
  })
  async addRole(
    @Body('userId', UserByIdPipe) user: User,
    @Body('roleName', RoleByNamePipe) role: Role,
  ) {
    user.roles = [role];

    await this.storeService.save(user);

    return { user, role };
  }

  @Delete('/user/remove-role')
  @ApiBody({
    type: AddRoleDto,
  })
  async removeRole(
    @Body('userId', UserByIdPipe) user: User,
    @Body('roleName', RoleByNamePipe) role: Role,
  ) {
    const roles = user.roles || [];
    user.roles = roles.filter((r) => role.name !== r.name);
    await this.storeService.save(user);

    return { user, role };
  }
}
