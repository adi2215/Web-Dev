import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './pages/album-photos/album-photos.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'albums',
        component: AlbumsComponent
    },
    {
        path: 'albums/:id',
        component: AlbumDetailComponent
    },
    {
        path: 'albums/:id/photos',
        component: AlbumPhotosComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

];
