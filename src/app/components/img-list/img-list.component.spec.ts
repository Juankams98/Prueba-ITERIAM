import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgListComponent } from './img-list.component';
import { ImgData } from 'src/app/models/image-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host-component',
  template: '<app-img-list [imgList]="imgList"></app-img-list>',
})
class TestHostComponent {
  imgList: ImgData[] = [];
}

describe('ImgListComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let imgListComponent: ImgListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgListComponent, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    imgListComponent = fixture.debugElement.children[0].componentInstance;
  });

  it('should create the component', () => {
    expect(imgListComponent).toBeTruthy();
  });

  it('should display the images', () => {
    hostComponent.imgList = [
      { id: '1', photo: 'url1', text: 'Lorem Ipsum 1' },
      { id: '2', photo: 'url2', text: 'Lorem Ipsum 2' },
    ];

    fixture.detectChanges();

    const imgElements = fixture.nativeElement.querySelectorAll('.img-item');

    expect(imgElements.length).toBe(hostComponent.imgList.length);

    for (let i = 0; i < hostComponent.imgList.length; i++) {
      const imgElement = imgElements[i];
      const imgData = hostComponent.imgList[i];

      expect(imgElement.querySelector('.img-photo').src).toContain(imgData.photo);
      expect(imgElement.querySelector('.img-text').textContent).toContain(imgData.text);
    }
  });
});