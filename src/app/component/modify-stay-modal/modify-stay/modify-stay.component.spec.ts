import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStayComponent } from './modify-stay.component';

describe('ModifyStayComponent', () => {
  let component: ModifyStayComponent;
  let fixture: ComponentFixture<ModifyStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyStayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
