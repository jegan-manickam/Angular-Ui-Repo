import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStayModalComponent } from './modify-stay-modal.component';

describe('ModifyStayModalComponent', () => {
  let component: ModifyStayModalComponent;
  let fixture: ComponentFixture<ModifyStayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyStayModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyStayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
