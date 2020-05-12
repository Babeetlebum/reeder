import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';
import { ThemeService } from '@shared/services';
import { MaterialModule } from '@shared/material.module';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;
  let themeService: ThemeService;
  let toggleThemeSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [MaterialModule],
      providers: [ThemeService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    themeService = debugElement.injector.get(ThemeService);
    toggleThemeSpy = spyOn(themeService, 'toggleTheme').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clicking the toggle theme button should call the theme service', async () => {
    await debugElement.query(By.css('.toggle-theme')).nativeElement.click();
    fixture.detectChanges();

    expect(toggleThemeSpy).toHaveBeenCalled();
  });
});
