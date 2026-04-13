import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { Contact } from './contacts.entity';

export enum SortDir {
  ASC = 'asc',
  DESC = 'desc',
}
export class GetContactsDto {
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Transform((prop) => parseInt(prop.value, 10))
  pageIndex?: number = 1;

  @IsNumber()
  @IsOptional()
  @Max(10)
  @Transform((prop) => parseInt(prop.value, 10))
  pageSize?: number = 2;

  @IsString()
  @IsOptional()
  sortBy?: string = 'email';

  @IsEnum(SortDir)
  @IsOptional()
  sortDir?: SortDir = SortDir.ASC;

  @Transform(({ value, key }) => new Date(value))
  createdAt?: Date;
}

export class CreateContactDto {
  @ApiProperty({
    description: 'Podaj swoje imie',
    example: 'Patryk',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'Podaj swoje email',
    example: 'p.rafal123@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'W czym możemy Ci pomoc',
    example: 'Bardzo podoba mi się wasza aplikacja, pomaga mi w pracy',
  })
  @MinLength(5)
  message: string;
}

export class CreateContactResponse {
  contact: Contact;
}

export class GetContactDto {
  id: string;
}

export class UpdateContactDto {
  name: string;
  message: string;
  email: string;
}

export class UpdateContactResponse {
  contact: Contact;
}

export class ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}
