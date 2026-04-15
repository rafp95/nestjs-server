import { Injectable } from '@nestjs/common';
import { rename } from 'fs/promises';
import { extname, resolve } from 'path';
import { ConfigService } from '../config';
import { PhotoUploadDto } from './dto/photo.upload.dto';
import { Photo } from './entity/photo';
import { PrismaService } from '../prisma.service';
import * as sharp from 'sharp';

@Injectable()
export class PhotosService {
  constructor(private config: ConfigService, private prisma: PrismaService) {}

  async create(file: Express.Multer.File, data: PhotoUploadDto, user: any) {
    // create new filename
    const filename = file.filename + extname(file.originalname).toLowerCase();

    // create destination path
    const destFile = resolve(this.config.STORAGE_PHOTOS, filename);

    // move file from tmp to storage
    await rename(file.path, destFile);

    // create photo entity
    const photo = new Photo({
      filename,
      description: data.description,
    });

    // return photo
    return this.prisma.photo.create({
      data: {
        fileName: photo.filename,
        description: photo.description,
        userId: user.id,
      },
    });
  }

  async createThumbs(filename: string) {
    // create src file path
    const srcFile = resolve(this.config.STORAGE_PHOTOS, filename);

    // create small thumbs
    const small = resolve(this.config.STORAGE_THUMBS, filename);

    await sharp(srcFile)
      .rotate()
      .resize(200, 200, { fit: 'cover', position: 'attention' })
      .jpeg({ quality: 100 })
      .toFile(small);

    // other sizes

    return { small };
  }
}
