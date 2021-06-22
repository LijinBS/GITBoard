import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalReleaseComponent } from './total-release.component';

describe('TotalReleaseComponent', () => {
  let component: TotalReleaseComponent;
  let fixture: ComponentFixture<TotalReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
