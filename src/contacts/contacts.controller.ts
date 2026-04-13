import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateContactDto, CreateContactResponse } from './contacts.dto';
import { StoreService } from '../store/store.service';
import { Contact } from './contacts.entity';

@Controller('contacts')
@ApiTags('Contacts')
export class ContactsController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async findAll() {
    return await this.storeService.find(Contact);
  }

  @Post()
  async create(@Body() data: CreateContactDto): Promise<CreateContactResponse> {
    const contact = new Contact(data);
    await this.storeService.save(contact);
    return { contact };
  }

  findOne() {}

  update() {}

  remove() {}
}
