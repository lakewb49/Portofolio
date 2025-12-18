import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Skill {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Senior Front-End UI Angular Developer');
  protected readonly name = signal('Biruk Lakew');
  protected readonly email = signal('biruklakew55@gmail.com');
  protected readonly phone = signal('240-729-9041');
  protected readonly location = signal('Burtonsville, MD 20866');
  protected readonly github = signal('https://github.com');
  protected readonly linkedin = signal('https://linkedin.com/in/biruk-lakew');

  protected readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'Enterprise Angular Dashboards',
      description: 'Developed Angular 17-19 enterprise dashboards with Material Design 3.0, interactive charts, and real-time telemetry supporting millions of data points.',
      technologies: ['Angular 17-19', 'TypeScript', 'Material Design 3.0', 'RxJS', 'Charts.js', 'REST APIs'],
      link: '#'
    },
    {
      id: 2,
      title: 'Nx Monorepo Architecture',
      description: 'Architected and maintained reusable components and shared libraries within an Nx monorepo for scalable enterprise applications.',
      technologies: ['Nx', 'Angular', 'TypeScript', 'Shared Libraries', 'Component Architecture'],
      link: '#'
    },
    {
      id: 3,
      title: 'NgRx State Management',
      description: 'Implemented NgRx for large-scale state management and streaming data with complex stateful workflows.',
      technologies: ['NgRx', 'Redux', 'RxJS', 'State Management', 'Effects', 'Selectors'],
      link: '#'
    },
    {
      id: 4,
      title: 'E2E Testing with Cypress',
      description: 'Automated end-to-end testing framework implementation ensuring code quality and UI reliability.',
      technologies: ['Cypress', 'Testing', 'E2E', 'Test Automation', 'JavaScript'],
      link: '#'
    },
    {
      id: 5,
      title: 'Accessibility & WCAG Compliance',
      description: 'Implemented WCAG 2.2, ADA, and Section 508 compliance standards with WAI-ARIA 1.2 for inclusive web applications.',
      technologies: ['WCAG 2.2', 'ADA', 'WAI-ARIA', 'Accessibility', 'Semantic HTML'],
      link: '#'
    },
    {
      id: 6,
      title: 'Microservices Integration',
      description: 'Integrated high-performance UIs with microservices architecture, REST APIs, and event-driven systems.',
      technologies: ['REST APIs', 'Microservices', 'Spring Boot', 'Event-Driven', 'Integration'],
      link: '#'
    }
  ]);

  protected readonly skills = signal<Skill[]>([
    {
      category: 'Front-End Frameworks',
      items: ['Angular (6-19)', 'React', 'Vue.js', 'TypeScript', 'JavaScript (ES6+)']
    },
    {
      category: 'State Management & Architecture',
      items: ['NgRx', 'Redux', 'RxJS', 'Reactive Programming', 'Component Architecture', 'Nx Monorepo']
    },
    {
      category: 'Styling & UI',
      items: ['SCSS', 'CSS3', 'HTML5', 'Material Design 3.0', 'Responsive Design', 'Figma', 'Adobe XD']
    },
    {
      category: 'Testing & Quality',
      items: ['Cypress', 'Jasmine', 'Karma', 'Unit Testing', 'E2E Testing', 'SonarQube', 'Checkmarx']
    },
    {
      category: 'Accessibility & Compliance',
      items: ['WCAG 2.2', 'ADA', 'Section 508', 'WAI-ARIA 1.2', 'Semantic HTML', 'Inclusive Design']
    },
    {
      category: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'Gitflow', 'Jira', 'AWS', 'Azure', 'CI/CD Pipelines', 'NX']
    },
    {
      category: 'Backend & Architecture',
      items: ['Spring Boot', 'Microservices', 'REST APIs', 'Event-Driven Architecture', 'Data Visualization']
    },
    {
      category: 'Methodologies',
      items: ['Agile/Scrum', 'Code Reviews', 'Test-Driven Development', 'Design Patterns', 'SOLID Principles']
    }
  ]);

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  contactMe() {
    window.location.href = `mailto:${this.email()}`;
  }
}
