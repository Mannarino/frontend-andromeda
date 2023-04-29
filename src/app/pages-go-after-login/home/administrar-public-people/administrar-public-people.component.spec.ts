import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPublicPeopleComponent } from './administrar-public-people.component';

describe('AdministrarPublicPeopleComponent', () => {
  let component: AdministrarPublicPeopleComponent;
  let fixture: ComponentFixture<AdministrarPublicPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarPublicPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarPublicPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
