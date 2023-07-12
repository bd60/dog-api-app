import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, throwError, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../../dog-core/error-handler.service';
import { 
    DogListApiResponse, 
    GenericDogApiResponse, 
    ApiStatusResponse, 
    DogPictureApiResponse, 
    DogPictureListApiResponse 
} from '../dog.interfaces';

@Injectable({providedIn: 'root'})
export class DogService {
    private baseUrl = 'https://dog.ceo/api';
    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

    getDogs() {
        return this.http.get<DogListApiResponse>(`${this.baseUrl}/breeds/list/all`).pipe(
            this.parseGenericResponse()
        );
    }

    getBreedPictureList(breed: string) {
        return this.http.get<DogPictureListApiResponse>(`${this.baseUrl}/breed/${breed}/images`).pipe(
            this.parseGenericResponse()
        );
    }

    getRandomBreedPicture(breed: string) {
        return this.http.get<DogPictureApiResponse>(`${this.baseUrl}/breed/${breed}/images/random`).pipe(
            this.parseGenericResponse()
        );
    }

    private parseGenericResponse<T>() {
        return pipe(
            map((resp: GenericDogApiResponse<T>) => {
                if (resp.status !== ApiStatusResponse.Success)
                    throwError(() => new Error('Bad Api Response'));
                return resp.message;
            }),
            catchError(() => {
                this.errorHandler.handleError('An unexpected error ocurred. Please try again.');
                return EMPTY;
            })
        );
    }
}