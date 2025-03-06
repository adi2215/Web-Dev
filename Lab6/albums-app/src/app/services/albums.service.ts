import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Album } from '../models/album/album.model';
import { Photo } from '../models/album/photo.model';
import { AlbumDetailed } from '../models/album/album-detailed.model';
import { User } from '../models/user/user.model';



@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private baseUrl: string = 'http://localhost:3000/';
  http: HttpClient = inject(HttpClient);

  constructor() { 
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl + 'albums');
  }

  public getAlbumById(id: string): Observable<Album> {
    return this.http.get<Album>(this.baseUrl + 'albums/' + `${id}`);
  }

  public deleteAlbum(id: string) {
    return this.http.delete(`${this.baseUrl}albums/${id}`);
  }

  public updateAlbum(id: string, newTitle: string) {
    return this.http.patch(`${this.baseUrl}albums/${id}`, {title: newTitle});
  }

  public getAlbumDetails(id: string | null): Observable<AlbumDetailed> {
    return this.http.get<AlbumDetailed>(this.baseUrl + 'albums/' + `${id}`).pipe(
      switchMap((album) => 
        forkJoin({
          images: this.http.get<Photo[]>(`${this.baseUrl}albums/${id}/photos`)
        }).pipe(
          map(({ images }) => ({
            ...album,
            images
          }))
        )
      )
    );
  }

  public getPhotos(id: string | null): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.baseUrl + 'albums/' + `${id}/` + 'photos');
  }

  public getUser(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + `users/${id}`);
  }


}
