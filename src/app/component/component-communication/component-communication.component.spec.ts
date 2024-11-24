import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunication } from './component-communication.component';

describe('ComponentCommunication', () => {
  let component: ComponentCommunication;
  let fixture: ComponentFixture<ComponentCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCommunication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCommunication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
