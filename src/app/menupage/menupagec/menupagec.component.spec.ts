import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupagecComponent } from './menupagec.component';

describe('MenupagecComponent', () => {
  let component: MenupagecComponent;
  let fixture: ComponentFixture<MenupagecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupagecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupagecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
