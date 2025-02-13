import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoLinkedin, ionLogoInstagram, ionLogoGithub } from '@ng-icons/ionicons'
@Component({
  selector: 'work-page-intro',
  imports: [NgIcon],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  providers: provideIcons({ ionLogoLinkedin, ionLogoInstagram, ionLogoGithub })
})
export class IntroComponent {

}
