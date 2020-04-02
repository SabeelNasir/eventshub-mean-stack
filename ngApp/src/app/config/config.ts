import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Config {
    apiUrl = "http://localhost:3000/api";
}