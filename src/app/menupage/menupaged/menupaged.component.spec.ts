import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupagedComponent } from './menupaged.component';

describe('MenupagedComponent', () => {
  let component: MenupagedComponent;
  let fixture: ComponentFixture<MenupagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupagedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
