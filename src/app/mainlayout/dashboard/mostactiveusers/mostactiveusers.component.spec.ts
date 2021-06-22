import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostactiveusersComponent } from './mostactiveusers.component';

describe('MostactiveusersComponent', () => {
  let component: MostactiveusersComponent;
  let fixture: ComponentFixture<MostactiveusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostactiveusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostactiveusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
