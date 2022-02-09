import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalProgressComponent } from './final-progress.component';

describe('FinalProgressComponent', () => {
  let component: FinalProgressComponent;
  let fixture: ComponentFixture<FinalProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
