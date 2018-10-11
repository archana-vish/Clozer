import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreamapsComponent } from './areamaps.component';

describe('AreamapsComponent', () => {
  let component: AreamapsComponent;
  let fixture: ComponentFixture<AreamapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreamapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreamapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
