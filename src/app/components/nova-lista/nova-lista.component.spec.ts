import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaListaComponent } from './nova-lista.component';

describe('NovaListaComponent', () => {
  let component: NovaListaComponent;
  let fixture: ComponentFixture<NovaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
