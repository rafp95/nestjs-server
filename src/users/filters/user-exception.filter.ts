import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';

@Catch()
export class UserExceptionFilter<T> implements ExceptionFilter {
  private logger: Logger = new Logger('UserExceptionFilter', {
    timestamp: true,
  });

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.status || 500;
    const userId = request?.payload?.user?.id || null;

    console.log('ERROR', exception.message);

    // TODO dodać logowanie

    const data = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      userId,
      errorMessage: process.env.DEBUG ? exception.message : null,
      errorStack: process.env.DEBUG ? exception.stack : null,
      reason: null,
    };

    response.status(status).json(data);
  }
}
