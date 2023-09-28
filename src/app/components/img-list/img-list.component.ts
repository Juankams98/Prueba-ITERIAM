import { Component, Input } from '@angular/core';
import { ImgData } from 'src/app/models/image-data.model';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})
export class ImgListComponent {

  @Input() imgList: ImgData[] = []

}
