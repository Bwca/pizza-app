import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { generateImage } from 'jsdom-screenshot';

import { NoItemsComponent } from './no-items.component';

describe('NoItemsComponent', () => {
  let component: NoItemsComponent;
  let fixture: ComponentFixture<NoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoItemsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has no visual regressions', async () => {
    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });
});
