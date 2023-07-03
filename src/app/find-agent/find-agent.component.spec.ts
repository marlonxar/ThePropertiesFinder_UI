import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAgentComponent } from './find-agent.component';

describe('FindAgentComponent', () => {
  let component: FindAgentComponent;
  let fixture: ComponentFixture<FindAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindAgentComponent]
    });
    fixture = TestBed.createComponent(FindAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
