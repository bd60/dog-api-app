import { Observable } from "rxjs";

// API Response Interfaces and Constants
export enum ApiStatusResponse {
    Success = 'success',
}

export interface GenericDogApiResponse<T> {
    message: T;
    status: ApiStatusResponse;
}

export interface DogList {
    [key: string]: string[];
}

export type DogListApiResponse = GenericDogApiResponse<DogList>;

export type DogPictureList = string[];

export type DogPictureListApiResponse = GenericDogApiResponse<DogPictureList>;

export type DogPicture = string;

export type DogPictureApiResponse = GenericDogApiResponse<DogPicture>;

// View Models
export interface DogView {
    breed: string,
    image$: Observable<string>;
}

export type DogListView = DogView[];