import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoGithub } from '@ng-icons/ionicons'

@Component({
  selector: 'work-page-skill-set',
  imports: [NgIcon],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
  standalone: true,
  providers: provideIcons({ ionLogoGithub })

})
export class SkillSetComponent {

}
