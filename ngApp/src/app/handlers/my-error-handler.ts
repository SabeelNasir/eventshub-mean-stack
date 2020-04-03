import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Constants } from '../constants/constants';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
    constructor(private _router: Router,
        private ngZone: NgZone,
        private _constants: Constants) { }
    handleError(error: any): void {
        if (error instanceof HttpErrorResponse) {
            if (error.status == 401) {
                this.ngZone.run(() => {
                    localStorage.removeItem(this._constants.tokenKey)
                    this._router.navigate(['/login'])
                })
            }
        }
    }
}