import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoAmazon, ionLogoAngular, ionLogoCss3, ionLogoGithub, ionLogoHtml5, ionLogoJavascript, ionLogoMedium, ionLogoNodejs, ionLogoReact, ionLogoSass, ionLogoVue, ionLogoWebComponent } from '@ng-icons/ionicons'
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
    ionLogoNodejs,
    ionLogoReact,
    ionLogoVue,
    ionLogoAmazon,
    ionLogoWebComponent,
    ionLogoCss3,
    ionLogoMedium

  })

})
export class SkillSetComponent {


  public skills: Array<Skill> = Skills

}
