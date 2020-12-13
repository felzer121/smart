import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IikoServersComponent } from './iiko-servers.component';

describe('IikoServersComponent', () => {
  let component: IikoServersComponent;
  let fixture: ComponentFixture<IikoServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IikoServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IikoServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
