import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable()
export class PerformanceInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    console.time('Duration');

    return next.handle().pipe(
      tap({
        finalize: () => {
          console.timeEnd('Duration');
        },
      }),
      map((res) => res),
    );
  }
}
