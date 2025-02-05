import { Component } from '@angular/core';
import { HomeShowcaseComponent } from '../../components/home-showcase/home-showcase.component';
import { HeaderInfoComponent } from '../../components/header-info/header-info.component';
import { ServicesComponent } from '../../components/services/services.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HostingPackagesComponent } from '../../components/hosting-packages/hosting-packages.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeShowcaseComponent, HeaderInfoComponent, ServicesComponent, CommonModule, RouterModule, HostingPackagesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
