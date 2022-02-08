import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalprogressComponent } from './finalprogress.component';

describe('FinalprogressComponent', () => {
  let component: FinalprogressComponent;
  let fixture: ComponentFixture<FinalprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
