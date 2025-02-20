import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoAngular, ionLogoCss3, ionLogoGithub, ionLogoHtml5, ionLogoJavascript, ionLogoNodejs, ionLogoSass } from '@ng-icons/ionicons'
import { Skill } from '../../interfaces/skills';
import { Skills } from '../../constants/skills';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../section-title/section-title.component";

@Component({
  selector: 'work-page-skill-set',
  imports: [NgIcon, CommonModule, SectionTitleComponent],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
  standalone: true,
  providers: provideIcons({
    ionLogoGithub,
    ionLogoAngular,
    ionLogoHtml5,
    ionLogoSass,
    ionLogoJavascript,
    ionLogoNodejs
  })

})
export class SkillSetComponent {


  public skills: Array<Skill> = Skills

}
