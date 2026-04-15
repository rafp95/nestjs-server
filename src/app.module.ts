import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { ConfigModule } from './config';
import { ContactsModule } from './contacts/contacts.module';
import { UsersModule } from './users/users.module';
import { ContactsApi } from './api-client-axios';
import { GlobalExceptionFilter } from './filters/global-exception.filter';

@Module({
  imports: [
    StoreModule,
    ConfigModule,
    ContactsModule,
    UsersModule,
    ContactsApi,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ContactsApi,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
