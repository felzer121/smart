import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffPlansDialogComponent } from './tariff-plans-dialog.component';

describe('TariffPlansDialogComponent', () => {
  let component: TariffPlansDialogComponent;
  let fixture: ComponentFixture<TariffPlansDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffPlansDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffPlansDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
