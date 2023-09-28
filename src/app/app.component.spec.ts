import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should add images on initialization', () => {
    component.ngOnInit();
    expect(component.imgList.length).toBeGreaterThan(0);
  });

  it('should set filterList initially', () => {
    component.ngOnInit();
    expect(component.filterList).toEqual(component.imgList);
  });

  it('should filter elements by id', () => {
    const idFilter = '1';
    component.imgList = [
      { id: '1', photo: 'url', text: 'Lorem Ipsum' },
      { id: '2', photo: 'url', text: 'Lorem Ipsum' },
    ];

    component.idFilter = idFilter;
    component.filtrarElementoPorId();

    expect(component.filterList.length).toBe(1);
    expect(component.filterList[0].id).toBe(idFilter);
  });

  it('should generate Lorem Ipsum text', () => {
    const loremIpsum = component.generarLoremIpsum();
    expect(loremIpsum).toBeTruthy();
  });

  it('should update filterList on input change', async () => {
    spyOn(component, 'filtrarElementoPorId');
    const idFilter = '1';
    component.idFilter = idFilter;
    component.onInputChange();

    await fixture.whenStable();

    expect(component.filtrarElementoPorId).toHaveBeenCalled();
  });
});