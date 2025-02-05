import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingPackagesComponent } from './hosting-packages.component';

describe('HostingPackagesComponent', () => {
  let component: HostingPackagesComponent;
  let fixture: ComponentFixture<HostingPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostingPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostingPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
