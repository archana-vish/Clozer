import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindaddressonmapComponent } from './findaddressonmap.component';

describe('FindaddressonmapComponent', () => {
  let component: FindaddressonmapComponent;
  let fixture: ComponentFixture<FindaddressonmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindaddressonmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindaddressonmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
