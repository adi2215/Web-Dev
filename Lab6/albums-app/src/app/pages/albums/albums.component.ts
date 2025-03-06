import { Component } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { inject } from '@angular/core';
import { Album } from '../../models/album/album.model';
import { AlbumDetailed } from '../../models/album/album-detailed.model';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albumsService = inject(AlbumsService);
  albums !: Album[];
  albumDetails !: AlbumDetailed[];

  constructor ( ) {
    this.albumsService.getAlbums().subscribe(res => {
      this.albums = res;
    })
  }

  deleteAlbum(id: string) {
    this.albumsService.deleteAlbum(id).subscribe(
      res => {
        this.albums = this.albums.filter(album => album.id !== id);
        console.log(res);
      }
    )
  }
}
