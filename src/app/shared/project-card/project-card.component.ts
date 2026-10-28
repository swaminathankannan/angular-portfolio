import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCaseStudy } from '../../core/models/content.models';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectCaseStudy>();
}
