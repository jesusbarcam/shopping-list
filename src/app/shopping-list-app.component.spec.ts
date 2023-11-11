import { TestBed } from '@angular/core/testing';
import { ShoppingListApp } from './shopping-list-app.component';

describe('ShoppingListApp', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListApp],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShoppingListApp);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'shopping-list' title`, () => {
    const fixture = TestBed.createComponent(ShoppingListApp);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shopping-list');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShoppingListApp);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, shopping-list'
    );
  });
});
