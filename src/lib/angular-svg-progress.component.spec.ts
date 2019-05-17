import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSvgProgressComponent } from './angular-svg-progress.component';

describe('AngularSvgProgressComponent', () => {
  let component: AngularSvgProgressComponent;
  let fixture: ComponentFixture<AngularSvgProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSvgProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSvgProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
