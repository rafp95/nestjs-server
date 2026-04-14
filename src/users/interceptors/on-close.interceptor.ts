import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { endWith, fromEvent, Observable, take, takeUntil } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class OnCloseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();

    const close$ = fromEvent(request, 'close');

    return next.handle().pipe(takeUntil(close$), endWith(''), take(1));
  }
}
