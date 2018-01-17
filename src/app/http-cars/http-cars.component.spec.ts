import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCarsComponent } from './http-cars.component';

describe('HttpCarsComponent', () => {
  let component: HttpCarsComponent;
  let fixture: ComponentFixture<HttpCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
