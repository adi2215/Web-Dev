import { Photo } from "./photo.model";

export interface AlbumDetailed {
    id: string,
    userId: string,
    username: string,
    title: string,
    images: Photo[]
}