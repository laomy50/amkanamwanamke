import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufComponent } from './menuf.component';

describe('MenufComponent', () => {
  let component: MenufComponent;
  let fixture: ComponentFixture<MenufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
