import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';
import { ConfigService, ConfigModule } from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'sqlite',
        database: config.DB_NAME,
        entities: [resolve(__dirname, '../**/*.entity{.ts,.js}')],
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DbModule {}
