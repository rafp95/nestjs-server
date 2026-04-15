export class Photo {
  id: number;

  filename: string;

  description?: string;

  constructor(data: Partial<Photo>) {
    Object.assign(this, data);
  }
}
