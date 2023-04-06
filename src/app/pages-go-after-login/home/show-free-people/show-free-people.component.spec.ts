import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFreePeopleComponent } from './show-free-people.component';

describe('ShowFreePeopleComponent', () => {
  let component: ShowFreePeopleComponent;
  let fixture: ComponentFixture<ShowFreePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFreePeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFreePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
