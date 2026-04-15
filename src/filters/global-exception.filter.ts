import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@config';

@Catch()
export class GlobalExceptionFilter<T> implements ExceptionFilter {
  private logger: Logger = new Logger('GlobalExceptionFilter', {
    timestamp: true,
  });

  constructor(private readonly config: ConfigService) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.status || 500;

    // TODO dodać logowanie

    const data = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      ...(this.config.DEBUG
        ? {
            errorMessage: this.config.DEBUG ? exception.message : null,
            errorStack: this.config.DEBUG ? exception.stack : null,
          }
        : null),
    };

    this.logger.log(
      'ERROR',
      JSON.stringify(
        {
          ...data,
          payload: request.payload ?? [],
        },
        null,
        2,
      ),
    );

    response.status(status).json(data);
  }
}
