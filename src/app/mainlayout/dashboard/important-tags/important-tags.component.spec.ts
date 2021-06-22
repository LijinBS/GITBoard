import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantTagsComponent } from './important-tags.component';

describe('ImportantTagsComponent', () => {
  let component: ImportantTagsComponent;
  let fixture: ComponentFixture<ImportantTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
