import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateContactDto,
  CreateContactResponse,
  ErrorResponse,
  GetContactDto,
  GetContactsDto,
  UpdateContactDto,
} from './contacts.dto';
import { StoreService } from '../store/store.service';
import { Contact } from './contacts.entity';

@Controller('contacts')
@ApiTags('Contacts')
export class ContactsController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  async findAll(@Query() query: GetContactsDto): Promise<Contact[]> {
    return await this.storeService.find(Contact, {
      take: query.pageSize,
      skip: query.pageSize * query.pageIndex,
    });
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() data: CreateContactDto): Promise<CreateContactResponse> {
    const contact = new Contact(data);
    await this.storeService.save(contact);
    return { contact };
  }

  @Get(':id')
  @ApiResponse({ status: 404, description: 'Not Found', type: ErrorResponse })
  async findOne(@Param() query: GetContactDto): Promise<Contact> {
    const contact = await this.storeService.findOneBy(Contact, {
      id: +query.id,
    });

    if (!contact) {
      throw new NotFoundException(`Contact for ${query.id} not found`);
    }

    return contact;
  }

  @Patch(':id')
  @ApiResponse({ status: 404, description: 'Not Found', type: ErrorResponse })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateContactDto,
  ) {
    const contact = await this.storeService.findOneBy(Contact, {
      id: id,
    });

    if (!contact) {
      throw new NotFoundException(`Contact for ${id} not found`);
    }
    Object.assign(contact, data);
    await this.storeService.save(contact);

    // await this.storeService.update(Contact, data, { id: +id });
    return contact;
  }

  @Delete('remove/:id/active')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Contact> {
    const contact = await this.storeService.findOneBy(Contact, {
      id: id,
    });

    if (!contact) {
      throw new NotFoundException(`Contact for ${id} not found`);
    }

    await this.storeService.remove(contact);

    return contact;
  }
}
