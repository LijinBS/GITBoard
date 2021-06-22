import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalContributorsComponent } from './total-contributors.component';

describe('TotalContributorsComponent', () => {
  let component: TotalContributorsComponent;
  let fixture: ComponentFixture<TotalContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalContributorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
