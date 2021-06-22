import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPullRequesComponent } from './total-pull-reques.component';

describe('TotalPullRequesComponent', () => {
  let component: TotalPullRequesComponent;
  let fixture: ComponentFixture<TotalPullRequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPullRequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPullRequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
