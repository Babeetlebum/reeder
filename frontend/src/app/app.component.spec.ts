import { TestBed, async } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { APP_TITLE, AppComponent, DARK_THEME_CLASS } from '@app/app.component';
import { Theme, ThemeService } from '@app/shared/services';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [Title, ThemeService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '${APP_TITLE}'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const titleService = TestBed.inject(Title);
    expect(titleService.getTitle()).toEqual(APP_TITLE);
  });

  it('should have DEFAULT theme', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app__container')).not.toHaveClass(DARK_THEME_CLASS);
  });

  it('should apply DARK theme', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const themeService = TestBed.inject(ThemeService);
    themeService.theme$ = of(Theme.DARK);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app__container')).toHaveClass(DARK_THEME_CLASS);
  });
});
