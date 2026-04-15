import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { PhotoUploadDto } from './dto/photo.upload.dto';
import { PhotosService } from './photos.service';
import { ApiAuth } from '../users/decorators/api-auth.decorator';
import { User } from '../users/entities/user.entity';
import { Auth } from '../users/decorators/auth.decorator';

@Controller('photos')
@ApiTags('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: PhotoUploadDto,
  })
  @ApiAuth()
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: PhotoUploadDto,
    @Auth() user: User,
  ) {
    const photo = await this.photosService.create(file, data, user);
    const thump = await this.photosService.createThumbs(photo.fileName);

    return { file, data, photo, thump };
  }
}
