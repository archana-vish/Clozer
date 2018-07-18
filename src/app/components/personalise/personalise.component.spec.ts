import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaliseComponent } from './personalise.component';

describe('PersonaliseComponent', () => {
  let component: PersonaliseComponent;
  let fixture: ComponentFixture<PersonaliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
