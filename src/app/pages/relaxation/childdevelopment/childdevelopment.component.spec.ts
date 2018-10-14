import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddevelopmentComponent } from './childdevelopment.component';

describe('ChilddevelopmentComponent', () => {
  let component: ChilddevelopmentComponent;
  let fixture: ComponentFixture<ChilddevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilddevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
