import { Component, inject, Input } from '@angular/core';
import { AlbumDetailed } from '../../models/album/album-detailed.model';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [PrimaryButtonComponent, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album!: AlbumDetailed;
  albumsService: AlbumsService = inject(AlbumsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  title!: string;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbumDetails(id).subscribe(
      res => {
        this.album = res;
        this.title = this.album.title;
      }
    );
  }
  
  updateTitle() {
    this.albumsService.updateAlbum(this.album.id, this.title).subscribe(
      res => {
        this.album.title = this.title;
        console.log('Title updated succefully');
      }
    );
  }

  
}
