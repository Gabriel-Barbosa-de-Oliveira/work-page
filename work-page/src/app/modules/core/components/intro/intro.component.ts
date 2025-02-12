import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoLinkedin, ionLogoVercel, ionLogoInstagram } from '@ng-icons/ionicons'
@Component({
  selector: 'work-page-intro',
  imports: [NgIcon],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  providers: provideIcons({ ionLogoLinkedin, ionLogoVercel, ionLogoInstagram })
})
export class IntroComponent {

}
