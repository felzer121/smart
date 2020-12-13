import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLkComponent } from './panel-lk.component';

describe('PanelLkComponent', () => {
  let component: PanelLkComponent;
  let fixture: ComponentFixture<PanelLkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
