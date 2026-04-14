import { User } from '../entities/user.entity';
import {
  IsEmail,
  MinLength,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  user: User;
  token: string;
}

export class AuthRegisterDto {
  @ApiProperty({
    example: 'Patryk',
  })
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 'p.rafal123@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'haslo#1!',
  })
  @IsPassword()
  password: string;
}

export class AuthLoginDto {
  @ApiProperty({
    example: 'p.rafal123@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'haslo#1!',
  })
  @IsPassword()
  password: string;
}

export class AuthLoginResponseDto {
  token: string;
  user: User;
}

export function IsPassword(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isPassword',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        message: 'Password has to be equal or grater then 4 characters',
        ...validationOptions,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          // TODO dostosowac validacje
          return ('' + value).length >= 4;
        },
      },
    });
  };
}
