import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'work-page-main',
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    IntroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true
})
export class MainComponent {

}
