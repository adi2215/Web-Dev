import { Component } from '@angular/core';
import { ImageUploadComponent } from "../../components/image-upload/image-upload.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ImageUploadComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
