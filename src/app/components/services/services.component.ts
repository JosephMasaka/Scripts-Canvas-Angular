import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      title: 'Web Development',
      description: 'Custom websites, e-commerce, PWAs, and CMS solutions.',
      icon: '🌐'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps.',
      icon: '📱'
    },
    {
      title: 'SaaS Development',
      description: 'Cloud-based SaaS solutions, APIs, and multi-tenant platforms.',
      icon: '☁️'
    },
    {
      title: 'Custom Software Solutions',
      description: 'Enterprise software like ERP, CRM, and HRMS.',
      icon: '💻'
    },
    {
      title: 'UI/UX Design & Prototyping',
      description: 'User-centered design with Figma, Adobe XD, and Sketch.',
      icon: '🎨'
    },
    {
      title: 'AI & Automation',
      description: 'AI-powered analytics, chatbots, and automation solutions.',
      icon: '🤖'
    },
    {
      title: 'IT Consultancy & Support',
      description: 'Software architecture planning, security audits, and DevOps.',
      icon: '🛠️'
    },
    {
      title: 'Game Development',
      description: '2D/3D games with Unity and web-based games using Phaser.js.',
      icon: '🎮'
    }
  ];
}
