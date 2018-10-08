import { ChildComponent } from './../child/child.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: 'Mock child'
})
export class ChildMockComponent {}

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildMockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should acquire an instance of child component', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(_ => {
      expect(component.child).toBeDefined();
    });
  }));
});
