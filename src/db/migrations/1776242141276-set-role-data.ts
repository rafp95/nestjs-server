import { MigrationInterface, QueryRunner } from 'typeorm';
import { Role, RoleNames, User } from '../../users/entities/user.entity';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { AuthService } from '../../users/services/auth.service';

const EMAIL = 'p.root@gmail.com';

export class SetRoleData1776242141276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const admin = new Role();
    admin.name = RoleNames.ADMIN;
    await queryRunner.manager.save(admin);

    const root = new Role();
    root.name = RoleNames.ROOT;
    await queryRunner.manager.save(root);

    const app = await NestFactory.createApplicationContext(AppModule, {
      logger: false,
    });

    const authService = app.get(AuthService);

    const password = await authService.encodePassword('root');

    const user = new User({
      name: 'Root',
      roles: [root],
      email: EMAIL,
      password: password,
    });

    await queryRunner.manager.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const user = await queryRunner.manager.findOneBy(User, { email: EMAIL });
    await queryRunner.manager.remove(User);

    await queryRunner.query('DELETE FROM role WHERE name=?', [RoleNames.ADMIN]);
    await queryRunner.query('DELETE FROM role WHERE name=?', [RoleNames.ROOT]);
  }
}
