import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaLostComponent } from './tabla-lost.component';

describe('TablaLostComponent', () => {
  let component: TablaLostComponent;
  let fixture: ComponentFixture<TablaLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
