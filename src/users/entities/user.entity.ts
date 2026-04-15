import { AST } from 'eslint';
import Token = AST.Token;
import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum RoleNames {
  ADMIN = 'admin',
  ROOT = 'root',
}

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: RoleNames;

  @ManyToMany((type) => User)
  users: User[];

  constructor(data?: Partial<Role>) {
    return Object.assign(this, data);
  }
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @ManyToMany((type) => Role, (role) => role.users, { eager: true })
  @JoinTable()
  roles: Role[];

  constructor(data?: Partial<User>) {
    return Object.assign(this, data);
  }
}

export class TokenPayload {
  sub: number;
}

export class RequestPayload {
  user: User;
  token: string;
}

export class ExceptionResponse {
  statusCode: number;
  message: string;
  error: string;
}
