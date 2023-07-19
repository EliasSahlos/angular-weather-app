import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {ErrorHandlerService} from "../error-handler/error-handler.service";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private errorHandlerService:ErrorHandlerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = ''
        let statusCode = error.status
        if (error.error instanceof ErrorEvent) {
          console.log("This is client side error")
          errorMsg = `Error: ${error.error.message}`
        } else {
          console.log("This is server side error")
          errorMsg = `Error Code: ${error.status}, Message: ${error.message}`
        }
        console.log(errorMsg)
        this.errorHandlerService.setErrorStatus(statusCode)
        return throwError(errorMsg)
      })
    )
  }
}
