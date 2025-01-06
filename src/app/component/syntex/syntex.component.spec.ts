import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntexComponent } from './syntex.component';

describe('SyntexComponent', () => {
  let component: SyntexComponent;
  let fixture: ComponentFixture<SyntexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyntexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyntexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
