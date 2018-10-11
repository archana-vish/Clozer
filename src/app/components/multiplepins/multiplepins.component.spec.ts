import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplepinsComponent } from './multiplepins.component';

describe('MultiplepinsComponent', () => {
  let component: MultiplepinsComponent;
  let fixture: ComponentFixture<MultiplepinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplepinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplepinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
