import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupagefComponent } from './menupagef.component';

describe('MenupagefComponent', () => {
  let component: MenupagefComponent;
  let fixture: ComponentFixture<MenupagefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupagefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupagefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
