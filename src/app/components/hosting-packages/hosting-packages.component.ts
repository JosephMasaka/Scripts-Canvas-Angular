import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hosting-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hosting-packages.component.html',
  styleUrl: './hosting-packages.component.css'
})
export class HostingPackagesComponent {
  hostingPlans = [
    {
      name: 'Basic',
      price: '$5/month',
      features: ['1 Website', '10GB SSD Storage', 'Free SSL', 'Unlimited Bandwidth'],
      popular: false
    },
    {
      name: 'Standard',
      price: '$10/month',
      features: ['5 Websites', '50GB SSD Storage', 'Free SSL & Domain', 'Unlimited Bandwidth'],
      popular: true
    },
    {
      name: 'Premium',
      price: '$20/month',
      features: ['Unlimited Websites', '200GB SSD Storage', 'Free SSL & Domain', 'Priority Support'],
      popular: false
    }
  ];
}
