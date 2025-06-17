import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainLayoutWithSidebar } from './main-layout-with-sidebar';

describe('MainLayoutWithSidebar', () => {
  let component: MainLayoutWithSidebar;
  let fixture: ComponentFixture<MainLayoutWithSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutWithSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayoutWithSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
