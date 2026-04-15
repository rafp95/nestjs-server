import { BadRequestException, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { StoreService } from './store/store.service';
import { Contact, ContactsApi } from './api-client-axios';
import { from, map, catchError, of } from 'rxjs';
import { ExceptionResponse } from './users/entities/user.entity';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly storeService: StoreService,
    private api: ContactsApi,
  ) {}

  @Get('/health-check')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-nest-api')
  async testNestApi() {
    return from(this.api.contactsControllerFindAll(0, 2, 'email', 'asc')).pipe(
      map((res) =>
        res.data.reduce((groups, currentValue) => {
          groups[currentValue.id] = currentValue;
          return groups;
        }, {}),
      ),
    );
  }
}
