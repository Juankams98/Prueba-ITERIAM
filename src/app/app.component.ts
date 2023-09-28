import { Component, OnInit } from '@angular/core';
import { ImgData } from './models/image-data.model';
import { Subject, debounceTime } from 'rxjs';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgList: ImgData[] = []
  filterList: ImgData[] = []
  idFilter: string = "";
  private filtroSubject = new Subject<string>();

  ngOnInit(): void {
    this.addImages()
  }

  public addImages(){

    for (let idImage = 0; idImage < 4000; idImage++) {
      this.imgList.push(new ImgData(idImage.toString(),
      `https://picsum.photos/id/${idImage}/200/100`,
      this.generarLoremIpsum())
      )
    }
    this.filterList = this.imgList
  }

  constructor() {
    this.filtroSubject.pipe(debounceTime(300),).subscribe(() => {
      this.filtrarElementoPorId();
    });
  }

  onInputChange() {
    this.filtroSubject.next(this.idFilter);
  }

  filtrarElementoPorId() {
    this.filterList = this.idFilter ? this.imgList.filter(item => item.id === this.idFilter) : this.imgList;
  }

  generarLoremIpsum(): string {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 1,
        min: 1,
      },
      wordsPerSentence: {
        max: 15,
        min: 3,
      },
    });

    return lorem.generateParagraphs(1);
  }
}

