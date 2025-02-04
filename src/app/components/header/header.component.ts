import { Component } from '@angular/core';
import { HeaderInfoComponent } from '../../components/header-info/header-info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
